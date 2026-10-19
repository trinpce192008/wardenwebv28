# Warden V28 — GitHub Pages + Gemini qua Apps Script

## 1. Tạo backend AI

Dùng một dự án Apps Script RIÊNG cho AI để không ghi đè doGet/doPost của dự án khảo sát Google Sheets.

1. Mở https://script.google.com → New project.
2. Dán toàn bộ `Code.gs` trong thư mục này vào file Code.gs của dự án.
3. Project Settings → Script Properties → Add script property:
   - `GEMINI_API_KEY`: API key của bạn từ https://aistudio.google.com/apikey.
   - `ALLOWED_ORIGINS`: `https://trinpce192008.github.io,https://warden-interactive-demo.nuttycow5.chatgpt.site`.
   Chỉ điền origin, không thêm `/wardenv2/` hoặc dấu `/` ở cuối.
   Không cần tạo thuộc tính GEMINI_MODEL. Script lấy danh sách model qua API, ưu tiên Flash/Lite và thử model khác khi gặp 429/404/500/503. Model cùng dự án có thể dùng chung hạn mức nên đổi model không bảo đảm còn quota.
4. Chọn hàm `testGemini` → Run → cấp quyền. Execution log phải có `reply` và `model`. Nếu bị giới hạn, chờ rồi thử lại. Không gửi ảnh chụp chứa API key.
5. Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone → Deploy.
6. Sao chép URL kết thúc bằng `/exec`.

Khi cập nhật mã: Deploy → Manage deployments → Edit → Version: New version → Deploy. Chỉ Save mã sẽ chưa cập nhật bản /exec.

## 2. Cấu hình frontend

Mở `config.js` ở thư mục gốc của gói GitHub-Pages:

```js
window.WARDEN_CONFIG = {
  appsScriptUrl: "DÁN_URL_EXEC_CỦA_BẠN",
  surveyUrl: "GIỮ_NGUYÊN_URL_KHẢO_SÁT",
  useSiteAI: false
};
```

Gói có sẵn URL /exec đã cung cấp trước đây. Cần cập nhật backend ở deployment đó bằng Code.gs V28, hoặc thay bằng URL mới. Không coi URL cũ là bằng chứng backend đã được cập nhật.

Không đặt GEMINI_API_KEY trong HTML/JS hoặc repository GitHub.

## 3. Đưa lên GitHub Pages

Upload NỘI DUNG thư mục `GitHub-Pages/` vào thư mục gốc repository (index.html phải ở gốc, không upload riêng thư mục bọc hoặc chỉ file ZIP).

GitHub → Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save. Giữ `.nojekyll` và toàn bộ thư mục assets.

Mở URL Pages, tải lại trang → vào một tab công cụ → AI → AI trực tuyến → hỏi “Hãy giải thích phishing trong hai câu”. Phản hồi thật phải xuất hiện sau khi gửi; chế độ trả lời mẫu là luồng riêng.

## 4. Kiểm tra và xử lý lỗi

- Mở `URL_EXEC?health=1`: ai:true chỉ xác nhận có thuộc tính API key, chưa xác nhận khóa hợp lệ hay còn quota. Chạy testGemini để xác nhận gọi Gemini thật.
- Không kết nối bridge: kiểm tra Anyone, URL /exec, ALLOWED_ORIGINS, rồi triển khai New version.
- Không thấy Anyone: tài khoản Google Workspace có thể bị quản trị viên hạn chế Web app công khai.
- 401/403 từ Gemini: kiểm tra API key, API/project và quyền truy cập.
- 429: chờ hạn mức phục hồi hoặc kiểm tra quota của project trong AI Studio.
- Script thử model khác trong ngân sách khoảng 25 giây giữa các lần gọi, không chờ sleep. UrlFetchApp không hỗ trợ timeout riêng; một lần gọi Google chậm vẫn có thể vượt thời gian chờ phía trình duyệt.
- Chat không giả phản hồi mẫu khi Gemini lỗi; lỗi được hiển thị để kiểm thử.

AI gửi câu hỏi, ngữ cảnh tab và ảnh bạn chọn tới Gemini. Khảo sát tiếp tục dùng đầu nhận Google Sheets hiện có; backend AI không đọc phản hồi khảo sát.

## Tài liệu chính thức

- Models API: https://ai.google.dev/api/models
- HTML Service + google.script.run: https://developers.google.com/apps-script/guides/html/communication
- Web apps: https://developers.google.com/apps-script/guides/web
