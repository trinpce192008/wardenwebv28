/* Presentation-only translation: stable form values and user-entered data are never translated.
   Every document load starts in Vietnamese; language changes only affect this visit. */
(()=>{
const pairs=`
Giao diện tối|Dark mode
Bật hoặc tắt giao diện tối|Toggle dark mode
Trang chủ|Home
Đóng góp|Contribute
Liên hệ|Contact
Đây là bản mô phỏng giao diện không phải bản chính thức. Nhận thông báo mới nhất khi ứng dụng được phát hành.|This is an interface prototype, not the official release. Get the latest news when the app launches.
Email được giữ trong phiên dùng thử và gửi kèm khi bạn đồng ý gửi khảo sát.|Your email stays in this trial session and is included when you consent to submit the survey.
Email của bạn|Your email
Nhập email của bạn|Enter your email
Dùng thử|Try Warden
Điều hướng trang chủ|Home navigation
Trang chủ Warden|Warden home
Vui lòng liên hệ với chúng tôi qua email|Please contact us by email at
KHÔNG GIAN TRẢI NGHIỆM|EXPLORE WARDEN
Trợ lý bảo mật dành cho bạn.|Your personal security assistant.
Tổng quan|Overview
Khôi phục tài khoản|Account recovery
Giải thích cảnh báo|Explain a warning
Tra mã hash|Hash lookup
Trình duyệt bảo mật|Secure browser
Bảo vệ bằng AI|AI protection
Khảo sát|Survey
Hướng dẫn|Guide
Bản mô phỏng|Prototype
Thông báo|Notifications
Tài khoản demo|Demo account
Điều hướng chính|Main navigation
© 2026 Warden · Hiểu rõ hơn. Chủ động hơn.|© 2026 Warden · Understand more. Take control.
Demo tương tác · Không quét thiết bị|Interactive demo · No device scanning
TRỢ LÝ BẢO MẬT CÁ NHÂN|PERSONAL SECURITY ASSISTANT
Không cần là chuyên gia.|No expertise needed.
Vẫn biết bước tiếp theo.|Know what to do next.
Thử giải thích một cảnh báo Windows bằng ngôn ngữ đơn giản, sau đó theo dõi từng bước xử lý.|Explore a Windows warning in plain language, then follow the recommended steps.
Theo dõi checklist phù hợp với tình huống mất quyền truy cập.|Follow a checklist tailored to your account recovery situation.
Đọc thông báo khó hiểu qua các kịch bản mẫu có hướng dẫn.|Understand confusing warnings through guided examples.
Nhận diện định dạng hash, tính SHA-256 và mở tra cứu bên ngoài.|Identify hash formats, calculate SHA-256 and open an external lookup.
Bắt đầu|Get started
Nội dung cảnh báo|Warning text
Dán nội dung, thêm ảnh chụp màn hình hoặc dùng mẫu để trải nghiệm.|Paste a warning, add a screenshot or explore a sample.
Dán nội dung|Paste text
Tải ảnh|Upload image
Dùng mẫu|Use a sample
Nhập nội dung thông báo bảo mật…|Enter the security warning…
Thêm ảnh chụp màn hình|Add a screenshot
Kéo thả ảnh vào đây hoặc nhấp để chọn|Drop an image here or click to choose
PNG, JPG, JPEG · tối đa 10 MB|PNG, JPG, JPEG · up to 10 MB
Cách chụp cảnh báo|How to capture a warning
Xóa nội dung|Clear text
Kết quả giải thích|Explanation
Kết quả mô phỏng|Simulated result
MÔ PHỎNG: phát hiện mã độc đánh cắp thông tin|SIMULATION: information-stealing malware detected
Tình huống dựng sẵn để trải nghiệm. Không phải kết quả quét thiết bị hoặc xác nhận máy của bạn đã nhiễm.|A scripted scenario for this demo. This is not a device scan or confirmation that your computer is infected.
Mức rủi ro trong kịch bản: cao · Tệp đã được cách ly mẫu.|Scenario risk: high · File quarantined in the simulation.
Tệp minh họa|Example file
sample.exe · thư mục Downloads|sample.exe · Downloads folder
Nguồn giả định|Assumed source
Bộ cài từ nguồn không xác minh|Installer from an unverified source
Hành vi mô phỏng|Simulated behavior
Đọc thông tin đăng nhập lưu trong trình duyệt, lấy cookie phiên và gửi dữ liệu ra ngoài.|Reads saved browser credentials, extracts session cookies and sends data externally.
Ảnh hưởng có thể xảy ra|Potential impact
Người khác có thể chiếm phiên đăng nhập hoặc truy cập tài khoản. Đây là khả năng trong kịch bản, chưa có bằng chứng dữ liệu thật đã bị lấy.|An attacker could hijack a session or access an account. This is a scenario possibility, not evidence of actual data theft.
Đã xử lý trong mô phỏng|Simulated response
Cách ly tệp và chặn kết nối của tiến trình. Cách ly tệp không tự thu hồi dữ liệu hoặc phiên đăng nhập đã lộ trước đó.|Quarantines the file and blocks the process connection. Quarantine cannot recover previously stolen data or revoke exposed sessions.
Các bước xử lý trong tình huống này|Steps for this scenario
Dừng chạy tệp và ngắt kết nối mạng nếu nghi đang bị lấy dữ liệu|Stop the file and disconnect if you suspect active data theft
Không mở lại, khôi phục hoặc cho phép tệp chỉ để bỏ qua cảnh báo. Nếu đang dùng thiết bị cơ quan, báo bộ phận IT.|Do not reopen, restore or allow the file just to bypass a warning. On a work device, contact IT.
Kiểm tra chi tiết và quét thiết bị|Review the details and scan the device
Mở lịch sử bảo vệ trong phần mềm bảo mật, kiểm tra tên tệp và trạng thái cách ly. Cập nhật công cụ và quét đầy đủ hoặc quét ngoại tuyến theo hướng dẫn của công cụ.|Open your security tool's protection history and check the file name and quarantine status. Update the tool and run a full or offline scan following its instructions.
Bảo vệ tài khoản bằng một thiết bị đáng tin cậy|Secure accounts from a trusted device
Đổi mật khẩu các tài khoản có nguy cơ, đăng xuất các phiên khác, kiểm tra email khôi phục và bật xác thực nhiều yếu tố. Không đổi mật khẩu trên máy vẫn nghi nhiễm.|Change at-risk account passwords, sign out other sessions, review recovery details and enable MFA. Do not change passwords on a suspected infected computer.
Kiểm tra lại trước khi sử dụng bình thường|Review before returning to normal use
Theo dõi đăng nhập lạ và cảnh báo tái xuất hiện. Nếu không xác định được phạm vi ảnh hưởng, nhờ người có chuyên môn hỗ trợ; demo không thể kết luận máy đã sạch.|Watch for unfamiliar sign-ins and repeated warnings. Seek expert help if the impact is unclear; this demo cannot confirm a device is clean.
Đã thực hiện|Completed
Hỏi AI Warden|Ask Warden AI
AI thật chưa kết nối|Live AI not connected
Có kết nối AI|AI connected
Trao đổi về nội dung trong tab này. Không nhập mật khẩu, OTP hoặc thông tin riêng tư.|Ask about this tab. Do not enter passwords, OTPs or private information.
Trao đổi về tình huống bảo mật bạn đang gặp. Không nhập mật khẩu, OTP hoặc thông tin riêng tư.|Discuss a security concern. Do not enter passwords, OTPs or private information.
Chế độ|Mode
Trả lời mẫu · không phải AI|Sample replies · not live AI
AI trực tuyến · chưa cấu hình|Live AI · not configured
AI trực tuyến|Live AI
Xóa hội thoại|Clear conversation
BẮT ĐẦU CUỘC TRÒ CHUYỆN|START A CONVERSATION
Chọn một câu hỏi gợi ý hoặc mô tả tình huống của bạn. Chế độ mẫu giúp bạn thử luồng hội thoại trước khi kết nối AI thật.|Choose a suggested question or describe your situation. Sample mode lets you explore the conversation before live AI is connected.
Giải thích cảnh báo này bằng từ ngữ đơn giản|Explain this warning in plain language
Tôi nên kiểm tra điều gì trước?|What should I check first?
Câu hỏi của bạn|Your question
Mô tả tình huống hoặc hỏi bước tiếp theo…|Describe the situation or ask what to do next…
Chỉ dùng nội dung chữ trong tab; không gửi ảnh hoặc tệp.|Uses text from this tab only; images and files are not sent.
Gửi câu hỏi ↑|Send question ↑
Đang xử lý…|Processing…
Đang xử lý|Processing
Phản hồi được soạn sẵn theo chủ đề để thử giao diện.|Replies are prewritten by topic to demonstrate the interface.
Khi gửi, câu hỏi và ngữ cảnh chữ được chuyển đến Google Gemini để tạo phản hồi.|Submitting sends your question and text context to Google Gemini to generate a response.
BẠN|YOU
WARDEN · PHẢN HỒI MẪU|WARDEN · SAMPLE REPLY
Enter để gửi · Shift + Enter xuống dòng|Enter to send · Shift + Enter for a new line
Tình huống của bạn|Your situation
Chọn tình huống gần nhất. Warden không tự truy cập hay khôi phục tài khoản.|Choose the closest situation. Warden does not access or recover accounts automatically.
Tài khoản cần hỗ trợ|Account provider
Điều gì đã xảy ra?|What happened?
Nghi lộ mật khẩu / mã độc đánh cắp thông tin|Suspected password leak / information-stealing malware
Đã nhập thông tin vào trang giả mạo|Entered information on a phishing page
Không thể đăng nhập tài khoản|Cannot sign in
Bắt đầu trên thiết bị đáng tin cậy|Start on a trusted device
Nếu nghi thiết bị bị nhiễm mã độc, dùng thiết bị sạch khác để thực hiện các bước khôi phục.|If you suspect malware, use a different, clean device for account recovery.
Mở trang khôi phục chính thức ↗|Open official recovery page ↗
Liên kết mở ở tab mới. Không nhập mật khẩu vào Warden.|Opens in a new tab. Do not enter your real password in Warden.
Lộ trình khôi phục|Recovery checklist
Đặt lại checklist này|Reset this checklist
Chuẩn bị thiết bị sạch|Use a clean device
Dùng thiết bị đáng tin cậy khác để thay đổi thông tin tài khoản.|Use another trusted device to update your account details.
Lấy lại quyền truy cập|Restore access
Mở trang khôi phục chính thức của nhà cung cấp và làm theo hướng dẫn.|Open the provider's official recovery page and follow its instructions.
Thay mật khẩu và kiểm tra phiên đăng nhập|Change your password and review sessions
Dùng mật khẩu riêng cho từng tài khoản; kiểm tra và thu hồi các phiên lạ nếu dịch vụ hỗ trợ.|Use a unique password for each account; review and revoke unfamiliar sessions where supported.
Kiểm tra bảo mật bổ sung|Review additional security
Rà soát thông tin khôi phục, bật xác thực nhiều yếu tố và xử lý thiết bị nghi nhiễm.|Review recovery details, enable MFA and address the potentially infected device.
Rời trang nghi giả mạo|Leave the suspected phishing page
Không tiếp tục cung cấp mật khẩu hoặc mã xác thực trên trang đó.|Stop entering passwords or verification codes on that page.
Đổi mật khẩu trên trang chính thức|Change your password on the official website
Truy cập trực tiếp dịch vụ từ thiết bị đáng tin cậy.|Visit the service directly from a trusted device.
Kiểm tra các phiên và ứng dụng liên kết|Review sessions and connected apps
Thu hồi phiên hoặc quyền truy cập mà bạn không nhận ra.|Revoke sessions or permissions you do not recognize.
Củng cố phương thức khôi phục|Strengthen recovery methods
Kiểm tra email, số điện thoại khôi phục và xác thực nhiều yếu tố.|Review your recovery email, phone number and MFA settings.
Kiểm tra đúng địa chỉ dịch vụ|Verify the service address
Truy cập dịch vụ chính thức, tránh liên kết khôi phục từ nguồn lạ.|Use the official service; avoid recovery links from unfamiliar sources.
Bắt đầu quy trình khôi phục|Start account recovery
Sử dụng trang khôi phục của nhà cung cấp.|Use the provider's recovery page.
Cung cấp thông tin xác minh|Provide verification information
Chỉ gửi thông tin theo yêu cầu trên trang chính thức. Không chia sẻ OTP với người khác.|Only provide information requested on the official page. Never share OTPs.
Rà soát sau khi lấy lại tài khoản|Review security after recovery
Kiểm tra thông tin khôi phục, phiên đăng nhập và thiết lập bảo mật.|Review recovery details, sign-in sessions and security settings.
Hỗ trợ khôi phục cùng AI|Recovery support with AI
Giúp tôi lập lộ trình khôi phục|Help me build a recovery plan
Tôi không còn truy cập email khôi phục|I cannot access my recovery email
Nhận diện MD5, SHA-1 hoặc SHA-256. Bản demo không tự kết nối cơ sở dữ liệu mã độc.|Identify MD5, SHA-1 or SHA-256. This demo does not automatically query malware databases.
Mã hash của tệp|File hash
Dán chuỗi hash tại đây…|Paste a hash here…
Kiểm tra định dạng →|Check format →
Dùng mã mẫu|Use sample hash
Hoặc tính SHA-256 từ tệp của bạn|Or calculate SHA-256 from your file
Tối đa 25 MB. Tệp chỉ được đọc tại trình duyệt, không tải lên máy chủ.|Up to 25 MB. Files are read in your browser and are not uploaded.
Thông tin hash|Hash information
Sẵn sàng kiểm tra|Ready to check
Dán một mã hash hoặc chọn tệp để bắt đầu.|Paste a hash or choose a file to get started.
Phân tích mã hash cùng AI|Hash analysis with AI
Mã hash này nói lên điều gì?|What does this hash tell me?
Không tìm thấy hash nghĩa là tệp an toàn?|Does an unknown hash mean the file is safe?
Chưa có kết quả đánh giá an toàn|No safety assessment available
Đúng định dạng không đồng nghĩa với tệp an toàn. Warden chưa truy vấn cơ sở dữ liệu mã độc.|A valid format does not mean a file is safe. Warden has not queried a malware database.
Tra trên VirusTotal ↗|Look up on VirusTotal ↗
Khi mở liên kết, mã hash sẽ được gửi đến VirusTotal. Tệp gốc không được gửi.|Opening this link sends the hash to VirusTotal. The original file is not sent.
Phòng thử nghiệm mô phỏng|Simulation lab
Không có virus thật, không chụp hay quay màn hình thật. “Đã chặn” chỉ là kết quả của kịch bản thử.|No actual malware, screenshots or screen recording. “Blocked” is a scripted demo outcome.
Theo dõi màn hình|Screen monitoring
Kho mật khẩu & OTP|Password vault & OTP
Trình duyệt Warden|Warden browser
Không gian trình duyệt Warden · tối đa 3 tab làm việc trong mô hình gói trả phí.|Warden browser workspace · up to 3 tabs in the proposed paid plan.
Chặn theo dõi màn hình trực tiếp|Block live screen monitoring
Chặn yêu cầu chụp màn hình|Block screenshot requests
Chặn ghi video màn hình|Block screen recording
Bảo vệ mô phỏng bật|Simulated protection on
Bảo vệ mô phỏng tắt|Simulated protection off
Tài khoản minh họa|Sample account
Chạy tình huống theo dõi|Run monitoring scenario
Đang mô phỏng…|Simulating…
Đặt lại|Reset
Không ghi hoặc chụp màn hình thật. Mọi nội dung bên cạnh là dữ liệu minh họa.|No real recording or screenshots. The adjacent view uses illustrative data only.
Góc nhìn mã độc · mô phỏng|Malware view · simulation
Quan sát những gì “kẻ theo dõi” nhận được.|See what the simulated observer receives.
Trình theo dõi giả lập|Simulated observer
Chờ chạy|Waiting
Chưa có yêu cầu theo dõi|No monitoring requests yet
Bấm “Chạy tình huống” để bắt đầu.|Select “Run monitoring scenario” to start.
Nhật ký sẽ hiện từng yêu cầu theo dõi, chụp và quay màn hình.|The log shows monitoring, screenshot and recording requests.
Đã chặn|Blocked
Đã nhận dữ liệu mẫu|Sample data received
Đã nhận mẫu|Sample received
Warden đã chặn|Blocked by Warden
Khung hình đen · Không nhận nội dung mẫu|Black frame · No sample content received
Đang thấy dữ liệu mẫu|Viewing sample data
Mô phỏng nội dung bị theo dõi|Simulated monitored content
Chụp ảnh màn hình|Screenshot
Quay màn hình|Screen recording
Trả phí · Cần tải ứng dụng · 2–3 tab làm việc. Chưa phát hành bản tải xuống.|Paid feature · App download required · 2–3 working tabs. Download not yet available.
Kho mật khẩu Warden|Warden password vault
Dữ liệu mẫu|Sample data
Kho mật khẩu được thiết kế để quản lý và lưu trữ thông tin đăng nhập an toàn trong trình duyệt Warden. Muốn xem hoặc tự động điền đều phải xác thực OTP. Bản web này chỉ lưu dữ liệu thử trong bộ nhớ phiên.|The vault is designed to manage and securely store credentials in the Warden browser. Viewing and autofilling require OTP verification. This web demo stores test data in session memory only.
Phương thức xác nhận|Verification method
Ứng dụng Authenticator|Authenticator app
Tin nhắn SMS|SMS message
Tài khoản được ẩn|Account hidden
Xem · OTP|View · OTP
Tự điền · OTP|Autofill · OTP
Ẩn tất cả|Hide all
Mở bàn phím ảo|Open virtual keyboard
Chỉ có tài khoản mẫu; demo không lưu mật khẩu thật và không tự điền sang website khác.|Sample accounts only. This demo does not store real passwords or autofill other websites.
Đăng nhập thử|Test sign-in
Nhấp vào ô để nhập bằng bàn phím ảo, hoặc chọn Tự điền và xác nhận OTP.|Click a field to use the virtual keyboard, or select Autofill and verify the OTP.
Tài khoản|Account
Mật khẩu mẫu|Sample password
Chưa tự điền|Not filled yet
Chờ xác nhận OTP|Awaiting OTP verification
Lưu tài khoản mẫu|Save sample account
OTP bảo vệ bước xem và tự điền|OTP protects viewing and autofill
Authenticator tạo mã trên điện thoại; SMS gửi mã đến số đã đăng ký. Cả hai luồng ở đây đều được mô phỏng.|Authenticator generates a code on your phone; SMS sends one to your registered number. Both flows are simulated here.
Bàn phím ảo đổi vị trí làm khó suy đoán từ tọa độ chuột, nhưng không chống được mọi dạng mã độc. Máy nhiễm có thể bị ghi màn hình, đọc bộ nhớ hoặc theo dõi giao diện.|Shuffled keys make mouse coordinates harder to interpret but cannot stop all malware. An infected device may still expose screen content, memory or interface activity.
Nhập tài khoản bằng bàn phím ảo|Enter an account with the virtual keyboard
Nhập mật khẩu bằng bàn phím ảo|Enter a password with the virtual keyboard
Keylogger có thể ghi phím vật lý. Nhấp phím trên màn hình để nhập dữ liệu thử. Vị trí giữ nguyên khi nhập, chỉ xáo trộn khi đóng bàn phím để làm khó suy đoán từ tọa độ chuột giữa các lần dùng.|Keyloggers can record physical keystrokes. Click keys to enter test data. Keys stay in place while typing and shuffle only when the keyboard closes, making mouse coordinates harder to interpret between sessions.
Chưa nhập ký tự|No characters entered
Xóa 1 ký tự|Backspace
Xóa hết|Clear all
Áp dụng và đóng|Apply and close
Chỉ nhập dữ liệu thử. Bàn phím ảo không bảo đảm an toàn trước mã độc ghi màn hình hoặc đọc bộ nhớ.|Enter test data only. A virtual keyboard cannot guarantee protection against screen-capture or memory-reading malware.
Xác nhận trước khi xem mật khẩu|Verify before viewing a password
Xác nhận trước khi tự điền|Verify before autofill
Phương thức:|Method:
SMS đến số mẫu •••• 2468|SMS to sample number •••• 2468
ĐIỆN THOẠI MÔ PHỎNG|SIMULATED PHONE
Tin nhắn minh họa, chưa gửi SMS thật|Sample message; no actual SMS sent
Mã minh họa trong ứng dụng, chưa thiết lập TOTP thật|Sample app code; real TOTP not configured
Mã thử có hiệu lực 60 giây.|Sample code expires in 60 seconds.
Nhập 6 chữ số từ điện thoại mẫu|Enter the 6 digits from the simulated phone
Xác nhận|Verify
Gửi lại mã mẫu|Resend sample code
Tạo mã mẫu mới|Generate sample code
Hủy|Cancel
Mã đã hết hạn. Hãy tạo mã mẫu mới.|Code expired. Generate a new sample code.
Đã thử sai 3 lần. Hãy tạo mã mẫu mới.|Three incorrect attempts. Generate a new sample code.
Vui lòng chờ 10 giây giữa hai lần tạo mã.|Please wait 10 seconds before generating another code.
Đã cho phép xem thông tin mẫu.|Sample information unlocked.
Đã tự điền vào biểu mẫu minh họa.|Sample form autofilled.
Đã ẩn toàn bộ thông tin mẫu.|All sample information hidden.
Trải nghiệm tính năng trả phí · Cần ứng dụng Warden|Paid feature preview · Warden app required
Tính năng trả phí, cần tải và cài ứng dụng Warden để sử dụng trên thiết bị. Bản web chỉ mô phỏng; ứng dụng tải xuống và giá bán chưa được phát hành.|Paid feature requiring the Warden app to be downloaded and installed. This website is a simulation; the app download and pricing are not yet available.
GIÁM SÁT MÔ PHỎNG|SIMULATED MONITORING
Theo dõi hành vi bất thường, đánh giá sự kiện và đề xuất cách xử lý. Demo chạy bằng kịch bản, không giám sát thiết bị thật.|Monitor unusual behavior, assess events and suggest actions. This demo uses scripted events and does not monitor your device.
Phiên giám sát mẫu đang dừng|Sample monitoring paused
Đang theo dõi luồng sự kiện mẫu…|Monitoring sample events…
Bắt đầu giám sát mẫu|Start sample monitoring
Dừng giám sát|Stop monitoring
Sự kiện bảo vệ|Protection events
Sự kiện sẽ xuất hiện sau khi bắt đầu giám sát.|Events appear after monitoring starts.
Trojan mẫu|Sample Trojan
Chụp màn hình mẫu|Sample screen capture
Kết nối đáng ngờ mẫu|Sample suspicious connection
Đã xử lý theo kịch bản · Xem giải thích →|Handled by scenario · View explanation →
Tôi vừa bấm vào một liên kết lạ|I just clicked an unfamiliar link
Máy tính xuất hiện cửa sổ đáng ngờ|A suspicious window appeared on my computer
Tôi nghi tài khoản bị truy cập trái phép|I suspect unauthorized access to my account
GÓP Ý SAU TRẢI NGHIỆM|POST-TRIAL FEEDBACK
Khảo sát Warden|Warden survey
9 câu hỏi · Khoảng 5–7 phút. Ý kiến của bạn giúp nhóm biết tính năng nào hữu ích và điều gì cần cải thiện.|9 questions · About 5–7 minutes. Your feedback helps us identify useful features and areas to improve.
Nhu cầu & tần suất|Needs & frequency
Đánh giá giao diện|Interface feedback
Mức sử dụng & gửi phản hồi|Usage & submission
Với nhu cầu của bạn, từng tính năng sau của Warden quan trọng ở mức nào?|How important is each Warden feature to your needs?
Có tính năng nào bạn cho rằng không cần thiết đối với mình không? Vì sao?|Are any features unnecessary for you? Why?
Nếu Warden được phát hành với các tính năng vừa trải nghiệm, bạn dự kiến sử dụng từng tính năng với tần suất nào?|If Warden launched with the features you just tried, how often would you use each one?
Điều gì khiến bạn chưa hài lòng khi trải nghiệm Warden?|What were you dissatisfied with during your Warden trial?
Bạn đánh giá mức độ rối mắt của giao diện Warden như thế nào?|How visually cluttered is the Warden interface?
Bạn thấy việc tìm và sử dụng các chức năng trong Warden dễ hay khó?|How easy or difficult is it to find and use Warden's features?
Bạn muốn Warden bổ sung tính năng nào? Tính năng đó sẽ giúp bạn giải quyết việc gì?|What features would you like Warden to add, and what problem would they solve?
Bạn có góp ý nào khác để nhóm cải thiện Warden không?|Do you have any other suggestions for improving Warden?
Trong lần dùng thử vừa rồi, bạn sử dụng các tính năng ở mức nào?|How independently were you able to use each feature during this trial?
1 = Không quan trọng · 5 = Rất quan trọng. Đánh giá theo nhu cầu của bạn.|1 = Not important · 5 = Very important. Rate according to your own needs.
Không quan trọng|Not important
Ít quan trọng|Slightly important
Bình thường|Neutral
Rất quan trọng|Very important
Quan trọng|Important
Có thể chọn nhiều tính năng. “Không có” là lựa chọn riêng.|You may select multiple features. “None” cannot be combined with other choices.
Không có|None
Giải thích lý do (có thể ghi “Không có”)|Explain your choice (you may write “None”)
Vì sao bạn chọn như vậy?|Why did you choose this answer?
Chọn câu trả lời|Select an answer
Hằng ngày|Daily
Vài lần mỗi tuần|A few times a week
Vài lần mỗi tháng|A few times a month
Chỉ khi gặp sự cố|Only when a problem occurs
Không sử dụng|Never
Chưa biết|Not sure
Mô tả điều chưa hài lòng; có thể ghi “Không có”.|Describe any dissatisfaction; you may write “None”.
Hoàn toàn không rối mắt|Not cluttered at all
Ít rối mắt|Slightly cluttered
Khá rối mắt|Somewhat cluttered
Rất rối mắt|Very cluttered
Rất khó|Very difficult
Khó|Difficult
Rất dễ|Very easy
Dễ|Easy
Không bắt buộc.|Optional.
Tính năng và vấn đề bạn muốn giải quyết…|The feature and problem you want to solve…
Góp ý khác của bạn…|Your other suggestions…
Chọn theo trải nghiệm thực tế. Nếu chưa dùng tính năng, hãy chọn “Chưa thử”.|Answer based on your actual experience. Select “Not tried” for features you have not used.
Tự sử dụng được|Used independently
Sử dụng được khi có hỗ trợ|Used with assistance
Đã thử nhưng chưa sử dụng được|Tried but could not use it
Chưa thử|Not tried
Gửi phản hồi cho nhóm Warden|Send feedback to the Warden team
Khảo sát được gửi kèm email bạn đã nhập ở trang chủ:|The survey includes the email you entered on the home page:
. Câu trả lời và email được lưu vào Google Sheet riêng của nhóm để đánh giá, cải thiện Warden. Không nhập mật khẩu, OTP hoặc thông tin nhạy cảm.|. Your answers and email are stored in the team's private Google Sheet to evaluate and improve Warden. Do not enter passwords, OTPs or sensitive information.
Tôi đồng ý gửi câu trả lời và email đã nhập ở trang chủ cho nhóm Warden.|I agree to send my answers and home-page email to the Warden team.
Đang kiểm tra kết nối nhận phản hồi…|Checking the feedback connection…
Sẵn sàng gửi câu trả lời cho nhóm.|Ready to send your answers to the team.
Khảo sát chưa mở nhận phản hồi. Bạn có thể điền thử; câu trả lời chưa được gửi.|Survey submission is not available yet. You can try the form; your answers have not been sent.
Kiểm tra lại|Check again
Tiến độ khảo sát|Survey progress
← Quay lại|← Back
Tiếp tục →|Continue →
Gửi khảo sát|Submit survey
Đang gửi…|Sending…
Câu trả lời chưa gửi được giữ trong phiên trình duyệt này khi chuyển tab.|Unsubmitted answers stay in this browser session while you switch tabs.
ĐÃ NHẬN PHẢN HỒI|FEEDBACK RECEIVED
Cảm ơn bạn đã trải nghiệm Warden.|Thank you for trying Warden.
Câu trả lời đã được xác nhận lưu vào Google Sheet của nhóm.|Your answers have been confirmed as saved in the team's Google Sheet.
Về Tổng quan|Back to overview
Bỏ qua tất cả|Skip all
Kế tiếp →|Next →
Hoàn tất|Finish
Lưu ý khi trải nghiệm|Trial notes
Gói trả phí & tải ứng dụng|Paid plan & app download
Đóng|Close
Điểm bắt đầu để chọn công cụ phù hợp với tình huống của bạn.|Choose the right tool for your situation.
Chọn Giải thích cảnh báo khi gặp thông báo khó hiểu.|Choose Explain a warning for messages you do not understand.
Chọn Khôi phục tài khoản nếu cần lộ trình lấy lại quyền truy cập.|Choose Account recovery for steps to restore access.
Chọn Tra mã hash để kiểm tra chuỗi hash hoặc tính SHA-256 từ tệp.|Choose Hash lookup to check a hash or calculate a file's SHA-256.
Chọn công cụ phù hợp; sau trải nghiệm, mở Khảo sát để gửi góp ý cho nhóm.|Choose a tool, then open the Survey to share your feedback.
Giúp bạn hiểu ý nghĩa của thông báo bảo mật và các bước nên kiểm tra tiếp theo.|Understand security warnings and what to check next.
Dán hoặc nhập nội dung cảnh báo; có thể chọn “Dùng mẫu”.|Paste or type a warning, or select “Use a sample”.
Bấm “Giải thích cảnh báo” để xem diễn giải bằng tiếng Việt.|Select “Explain a warning” to see the explanation.
Mở từng bước hướng dẫn và đánh dấu khi đã thực hiện.|Open each step and mark it when completed.
Demo giải thích theo kịch bản mẫu. Ảnh tải lên chỉ được xem trước, chưa đọc chữ tự động (OCR).|Explanations use sample scenarios. Images are previewed only; OCR is not available.
Cung cấp checklist tham khảo dựa trên tình huống mất quyền truy cập.|A reference checklist based on your account access issue.
Chọn nhà cung cấp tài khoản và tình huống đang gặp.|Select your account provider and situation.
Thực hiện từng bước trong lộ trình và đánh dấu hoàn thành.|Follow each step and mark it as complete.
Dùng nút mở trang khôi phục chính thức nếu cần; có thể đặt lại checklist.|Open the official recovery page if needed. You can reset the checklist.
Warden không tự khôi phục tài khoản, không yêu cầu mật khẩu hoặc OTP thật.|Warden does not recover accounts automatically or ask for real passwords or OTPs.
Hash là chuỗi đại diện cho nội dung tệp. Tab này giúp nhận diện định dạng và chuẩn bị tra cứu.|A hash represents a file's contents. This tab identifies its format and prepares a lookup.
Dán mã MD5, SHA-1 hoặc SHA-256 rồi bấm kiểm tra định dạng.|Paste an MD5, SHA-1 or SHA-256 hash and select Check format.
Hoặc chọn tệp để tính SHA-256 ngay trên trình duyệt.|Or choose a file to calculate SHA-256 in your browser.
Bấm “Tra trên VirusTotal” nếu muốn tra cứu qua dịch vụ bên ngoài.|Select “Look up on VirusTotal” to use the external service.
Đúng định dạng không có nghĩa là tệp an toàn. Tệp không được tải lên; khi mở VirusTotal, mã hash được gửi qua liên kết.|A valid format does not mean a file is safe. Files are not uploaded; opening VirusTotal sends the hash through the link.
Trình duyệt riêng của Warden với các lớp bảo vệ màn hình và kho mật khẩu.|Warden's own browser with screen protection and a password vault.
Bật riêng từng công tắc rồi chạy tình huống theo dõi, chụp và quay màn hình.|Toggle each protection and run the monitoring, screenshot and recording scenario.
Mở Kho mật khẩu & OTP. Nhấp ô tài khoản hoặc mật khẩu để nhập bằng bàn phím ảo; thứ tự phím chỉ đổi khi đóng.|Open Password vault & OTP. Click the account or password field to use the virtual keyboard; keys shuffle only when closed.
Kho mật khẩu quản lý thông tin đăng nhập trong Warden. Xem hoặc tự điền phải xác thực OTP qua Authenticator hoặc SMS.|The vault manages Warden credentials. Viewing or autofilling requires OTP verification via Authenticator or SMS.
Tính năng trả phí, cần tải và cài ứng dụng Warden để sử dụng trên thiết bị. Bản web chỉ mô phỏng; ứng dụng tải xuống và giá bán chưa được phát hành. Gói dự kiến giới hạn 2–3 tab làm việc; demo minh họa giới hạn 3 tab.|Paid feature requiring the Warden app. This website is a simulation; download and pricing are not available yet. The proposed plan allows 2–3 working tabs; this demo illustrates a limit of 3.
Ý tưởng: AI liên tục theo dõi tín hiệu bảo mật để phát hiện hành vi bất thường và hỗ trợ bảo vệ thiết bị.|Concept: AI continuously monitors security signals to detect unusual behavior and help protect the device.
Bắt đầu phiên giám sát mẫu để thấy sự kiện xuất hiện theo thời gian.|Start sample monitoring to see events appear over time.
Chọn một sự kiện để đọc phân tích và bước xử lý minh họa.|Select an event to read its sample analysis and response steps.
Dừng giám sát khi muốn kết thúc; có thể hỏi thêm ở phần phân tích AI.|Stop monitoring when finished, or ask follow-up questions in the AI panel.
Tính năng trả phí, cần tải và cài ứng dụng Warden để sử dụng trên thiết bị. Bản web chỉ mô phỏng; ứng dụng tải xuống và giá bán chưa được phát hành. Phiên demo dùng sự kiện soạn sẵn, không đọc thiết bị và không tự chặn tiến trình thật.|Paid feature requiring the Warden app. This website is a simulation; download and pricing are not available yet. Demo events are scripted; no device data is read and no real processes are blocked.
CẢNH BÁO MÔ PHỎNG|SIMULATED WARNING
Điều đang xảy ra|What is happening
Rủi ro trong tình huống|Scenario risks
Warden đã làm gì trong mô phỏng?|What did Warden do in the simulation?
Bước tiếp theo|Next steps
Tiến trình sample.exe yêu cầu đọc dữ liệu đăng nhập.|The sample.exe process requests access to sign-in data.
Ứng dụng không rõ nguồn yêu cầu chụp màn hình liên tiếp.|An unknown app repeatedly requests screenshots.
Một tiến trình gửi dữ liệu đến miền example.invalid.|A process sends data to example.invalid.
Tiến trình sample.exe từ một bộ cài không xác minh đang cố đọc dữ liệu đăng nhập và cookie phiên.|The sample.exe process from an unverified installer tries to read credentials and session cookies.
Kẻ tấn công có thể lấy thông tin tài khoản hoặc dùng cookie để chiếm phiên đăng nhập. Chưa có bằng chứng thiết bị thật bị ảnh hưởng.|An attacker could steal account details or hijack a session using cookies. There is no evidence of a real device being affected.
Cách ly tiến trình mẫu, chặn truy cập kho mật khẩu và ngắt kết nối gửi dữ liệu trong kịch bản.|Isolates the sample process, blocks vault access and stops the scenario's outbound connection.
Dừng chạy tệp; kiểm tra lịch sử bảo vệ và quét thiết bị. Dùng thiết bị đáng tin cậy để đổi mật khẩu, thu hồi phiên đăng nhập và bật xác thực nhiều yếu tố.|Stop the file, check protection history and scan the device. Use a trusted device to change passwords, revoke sessions and enable MFA.
Một ứng dụng không rõ nguồn yêu cầu chụp màn hình nhiều lần khi bạn đang làm việc trong trình duyệt Warden.|An unknown app repeatedly requests screenshots while you work in the Warden browser.
Nội dung tin nhắn, tài liệu hoặc thông tin trên màn hình có thể bị ghi lại nếu yêu cầu được cho phép.|Messages, documents or other screen content could be recorded if access is allowed.
Từ chối yêu cầu chụp màn hình mẫu. Bên theo dõi chỉ nhận khung hình bị che trong mô phỏng.|Rejects the sample screenshot request. The simulated observer receives a masked frame only.
Kiểm tra nguồn cài đặt và quyền ghi màn hình của ứng dụng. Thu hồi quyền không cần thiết; dùng công cụ bảo mật để kiểm tra nếu nghi bị theo dõi.|Check the app's source and screen-recording permissions. Revoke unnecessary permissions and use a security tool if you suspect monitoring.
Một tiến trình mẫu cố gửi dữ liệu đến một miền không xác định. Miền example.invalid chỉ dùng để minh họa.|A sample process tries to send data to an unknown domain. example.invalid is used for illustration only.
Kết nối bất thường có thể liên quan đến rò rỉ dữ liệu, nhưng một kết nối lạ tự nó chưa chứng minh tiến trình là mã độc.|Unusual connections may involve data leakage, but an unfamiliar connection alone does not prove malware.
Cô lập kết nối mẫu và ghi lại sự kiện để người dùng kiểm tra.|Isolates the sample connection and logs the event for review.
Xem tên tiến trình, đường dẫn tệp và nhà phát hành. Đối chiếu với phần mềm bạn đã cài trước khi cho phép kết nối lại.|Review the process name, file path and publisher. Compare them with your installed software before allowing the connection.
Nội dung mẫu được soạn bằng AI. Đây không phải kết quả quét hoặc phân tích thiết bị thật.|Sample content drafted with AI. This is not an actual device scan or analysis.
Mẫu minh họa: Authenticator thường tự tạo mã dùng một lần ngay trên điện thoại; dịch vụ SMS gửi mã về số điện thoại đã đăng ký. Trong demo, chọn phương thức rồi nhập mã đang hiển thị trên điện thoại mô phỏng để xem hoặc tự điền mật khẩu mẫu. Chưa có tin nhắn hay xác thực thật.|Sample reply: Authenticator generates one-time codes on your phone; SMS sends them to your registered number. In this demo, choose a method and enter the code shown on the simulated phone to view or autofill a sample password. No real messages or authentication are involved.
Mẫu minh họa: Keylogger có thể ghi nhận ký tự từ bàn phím vật lý. Bàn phím ảo cho phép nhấp ký tự, rồi đổi vị trí phím khi đóng bàn phím nhằm làm khó việc suy ra ký tự chỉ từ tọa độ chuột. Tuy nhiên, mã độc có thể chụp màn hình, đọc bộ nhớ hoặc theo dõi giao diện, nên không thể coi đây là bảo đảm an toàn tuyệt đối.|Sample reply: Keyloggers can capture physical keystrokes. The virtual keyboard lets you click characters, then shuffles when closed to make mouse coordinates harder to interpret. Malware may still capture screens, read memory or monitor the interface, so this cannot guarantee complete protection.
Mẫu minh họa: Hash là chuỗi đại diện nội dung tệp, không phải kết luận an toàn. Định dạng hợp lệ hoặc chưa có kết quả tra cứu không chứng minh tệp sạch. Đối chiếu nguồn tải và dùng nút VirusTotal nếu bạn muốn gửi mã hash sang dịch vụ đó. Warden chưa tự tra cứu cơ sở dữ liệu.|Sample reply: A hash represents file contents, not safety. A valid format or missing lookup result does not prove a file is clean. Check its source and use VirusTotal if you want to send the hash to that service. Warden has not queried the database automatically.
Mẫu minh họa: Hãy dùng thiết bị đáng tin cậy để mở trang khôi phục chính thức. Khi lấy lại được quyền truy cập, kiểm tra thông tin khôi phục và các phiên lạ; dùng mật khẩu riêng và xác thực nhiều yếu tố. Bạn đang mất quyền truy cập dịch vụ nào, và còn phương thức khôi phục nào?|Sample reply: Open the official recovery page on a trusted device. After restoring access, review recovery details and unfamiliar sessions, use a unique password and enable MFA. Which service are you locked out of, and which recovery methods remain available?
Mẫu minh họa: Hãy đọc tên công cụ phát cảnh báo, tên tệp và trạng thái xử lý. Không chạy tệp lạ chỉ để bỏ qua cảnh báo. Với “Windows protected your PC”, hãy kiểm tra nguồn tải và nhà phát hành. Đoạn hướng dẫn này chưa phân tích nội dung bạn nhập bằng mô hình AI.|Sample reply: Check the security tool, file name and action status. Do not run an unfamiliar file just to bypass a warning. For “Windows protected your PC”, check its source and publisher. This sample guidance has not analyzed your input with an AI model.
Mẫu minh họa: Chuyển giữa “Theo dõi màn hình” và “Kho mật khẩu”. Tắt bảo vệ, chạy tình huống để thấy ảnh mẫu bị lộ; bật Warden rồi thử lại để thấy luồng bị chặn trong mô phỏng. Kho mật khẩu yêu cầu OTP mẫu trước mỗi lần xem hoặc tự điền.|Sample reply: Switch between Screen monitoring and Password vault. Turn protection off and run the scenario to see sample data exposed, then enable Warden to see it blocked in the simulation. The vault requires a sample OTP before viewing or autofilling.
Mẫu minh họa: Nếu chỉ mở liên kết, hãy đóng trang và không cấp thêm quyền. Nếu đã tải tệp hoặc nhập thông tin, các bước tiếp theo sẽ khác. Bạn đã tải/chạy tệp, đăng nhập hay nhập mã xác thực trên trang đó chưa? Không gửi mật khẩu hoặc OTP vào cuộc trò chuyện.|Sample reply: If you only opened a link, close the page and grant no further permissions. If you downloaded a file or entered information, the next steps differ. Did you run a file, sign in or enter a verification code? Do not share passwords or OTPs here.
Mẫu minh họa: Hãy mô tả điều đã xảy ra, thông báo bạn thấy và thao tác ngay trước đó. Không gửi dữ liệu nhạy cảm. Chế độ này chỉ minh họa hội thoại bằng câu trả lời soạn sẵn; cần kết nối dịch vụ AI để phân tích tình huống tự do và trả lời theo ngữ cảnh.|Sample reply: Describe what happened, the message you saw and what you did beforehand. Do not share sensitive data. This mode uses prewritten replies; live AI must be connected for open-ended, context-aware analysis.
Hãy nhập câu hỏi trước khi gửi.|Enter a question before sending.
AI trực tuyến chưa được cấu hình trên máy chủ. Hãy dùng chế độ trả lời mẫu để thử giao diện.|Live AI is not configured on the server. Use sample replies to explore the interface.
Cùng làm rõ cảnh báo.|Let's understand the warning.
Nhập nội dung hoặc chọn một mẫu để xem giải thích.|Enter warning text or choose a sample to view an explanation.
Chưa đủ cơ sở kết luận tệp là mã độc|Not enough evidence to classify the file as malware
Kết quả từ kịch bản mô phỏng, không phải phân tích thiết bị.|A simulated scenario result, not device analysis.
Ứng dụng chưa được nhận diện|Unrecognized application
Cảnh báo SmartScreen có thể xuất hiện khi ứng dụng chưa đủ uy tín.|SmartScreen may warn when an app lacks sufficient reputation.
Thông báo phát hiện mối đe dọa|Threat detection notification
Ứng dụng bị giới hạn kết nối|App connections restricted
Mẫu này mô tả tường lửa đang giới hạn một số kết nối của ứng dụng.|This sample shows a firewall restricting some app connections.
Chưa nhận diện được cảnh báo|Warning not recognized
Demo chỉ hỗ trợ một số mẫu. Bạn có thể dùng nút “Dùng mẫu” để thử.|This demo supports selected examples. Select “Use a sample” to explore them.
Các bước đề xuất|Suggested steps
Kiểm tra nguồn tải|Check the download source
Đối chiếu nguồn tải với trang chính thức của nhà phát hành.|Compare the download source with the publisher's official website.
Xem thông tin cảnh báo|Review warning details
Mở chi tiết trong công cụ bảo mật để đọc tên tệp, đường dẫn và trạng thái xử lý. Không bỏ qua cảnh báo chỉ dựa vào demo.|Open the security tool's details to review the file name, path and action status. Do not dismiss a warning based on this demo.
Kiểm tra thêm khi cần|Investigate further if needed
Có thể đối chiếu mã hash hoặc nhờ người có chuyên môn đánh giá. Một kết quả đơn lẻ không bảo đảm tệp an toàn.|Compare the hash or seek expert advice. One result alone cannot guarantee file safety.
Vì sao cần làm?|Why do this?
Chọn cảnh báo mẫu|Choose a sample warning
Các mẫu phục vụ trình diễn giao diện.|Samples demonstrate the interface.
Đã hiển thị giải thích mô phỏng.|Simulated explanation displayed.
Dán nội dung bằng Ctrl+V hoặc menu Dán của thiết bị.|Paste with Ctrl+V or your device's Paste menu.
Vui lòng nhập email hợp lệ để bắt đầu trải nghiệm.|Enter a valid email to start the trial.
Vui lòng nhập địa chỉ email hợp lệ, ví dụ ban@example.com.|Enter a valid email address, such as you@example.com.
Bạn đang sử dụng bản mẫu tương tác Warden.|You are using Warden's interactive prototype.
Chưa kết nối thiết bị; không có cảnh báo bảo mật trực tiếp.|No device connected; live security alerts are unavailable.
Tài khoản trải nghiệm|Trial account
Khách trải nghiệm|Guest visitor
Không cần đăng nhập. Tiến độ checklist được lưu trên trình duyệt này khi được phép.|No sign-in required. Checklist progress is saved in this browser when permitted.
Xóa tiến độ đã lưu|Clear saved progress
Đã xóa tiến độ demo.|Demo progress cleared.
Thu gọn thanh bên|Collapse sidebar
Mở thanh bên|Expand sidebar
Tính năng VIP|VIP features
Bảo vệ màn hình|Screen protection
Xác thực trước khi xem|Verify before viewing
`;
const extraPairs={"Trả lời mẫu":"Preset replies","Cài đặt hội thoại":"Conversation settings","Đóng gợi ý":"Dismiss hint","Mở thanh công cụ":"Open toolbar","Thanh công cụ trải nghiệm":"Experience toolbar","Khám phá": "Explore", "BẢN TRÌNH DIỄN": "INTERACTIVE DEMO", "Bảo mật không": "Security does not", "cần": "have to be", "khó hiểu.": "complicated.", "Biến những cảnh báo phức tạp thành hành động rõ ràng. Một không gian để tìm hiểu, phản ứng và chủ động bảo vệ thế giới số của bạn.": "Turn complex alerts into clear actions. A workspace to learn, respond and take control of your digital security.", "nhóm trải nghiệm": "experience areas", "mô phỏng an toàn": "safe simulation", "mục tiêu: dễ hiểu": "goal: clarity", "TRẠNG THÁI PHIÊN": "SESSION STATUS", "Đang ở chế độ học": "Learning mode", "Không thực hiện quét thiết bị thật.": "No real device scanning.", "Hướng dẫn tức thì": "Step-by-step guidance", "AI giải thích rõ ràng": "Clear AI explanations", "An toàn hơn, từng bước một.": "Safer, one step at a time.", "Chọn tình huống bạn gặp phải. Warden giúp bạn hiểu vấn đề và biết nên làm gì tiếp theo.": "Choose your situation. Warden helps you understand the issue and decide what to do next.", "Hiểu cảnh báo Windows bằng ngôn ngữ đơn giản.": "Understand Windows alerts in plain language.", "Từng bước xử lý an toàn theo loại sự cố.": "Safe, step-by-step guidance for each incident.", "Tra cứu mã hash": "Hash lookup", "Tính SHA-256 cục bộ và kiểm tra định dạng.": "Calculate SHA-256 locally and check hash formats.", "Phòng thử nghiệm VIP": "App Beta laboratory", "Khám phá OTP, kho mật khẩu và sự kiện bảo vệ giả lập.": "Explore OTP, the password vault and simulated protection events.", "Định hình Warden cùng chúng tôi.": "Shape Warden with us.", "Để lại email nếu bạn muốn nhận thông tin về các phiên bản thử nghiệm sau.": "Leave your email if you would like updates about future trial versions.", "Bạn đang gặp vấn đề gì?": "What can we help you with?", "Warden AI - Trang chủ": "Warden AI - Home", "Nhập email để bắt đầu": "Enter your email to begin", "Chuyển ngôn ngữ Việt / Anh": "Switch Vietnamese / English", "Đóng trợ lý Warden": "Close Warden assistant", "Đóng Warden AI": "Close Warden AI", "Hỏi Warden AI": "Ask Warden AI", "Mô tả": "Description", "Tôi đang gặp một cảnh báo lạ": "I am seeing an unfamiliar alert", "Tôi cần khôi phục tài khoản": "I need to recover an account", "Nhập nội dung trò chuyện": "Enter your message", "Thêm ảnh vào hội thoại": "Attach an image", "Hiện lại thông báo": "Show notice again", "Ẩn thông báo": "Dismiss notice", "Tiến độ khôi phục": "Recovery progress", "Kéo thả ảnh hoặc nhấp để chọn": "Drop an image here or click to choose", "PNG, JPG · tối đa 10 MB": "PNG, JPG · up to 10 MB", "Kết quả giải thích cảnh báo": "Alert explanation results", "Chưa chọn tệp": "No file selected", "Chọn tệp để tính SHA-256": "Choose a file to calculate SHA-256", "MÔ PHỎNG": "SIMULATION", "Tab mới": "New tab", "Không gian duyệt web của bạn": "Your browsing workspace", "Giao diện quen thuộc. Phiên trình duyệt chạy trên Warden server.": "A familiar interface. The browser session runs on the Warden server.", "Tìm kiếm hoặc nhập địa chỉ website": "Search or enter a website address", "● Mô phỏng luồng hình ảnh từ server": "● Simulated screen stream from the server", "Theo ý tưởng sản phẩm, Warden server xử lý phiên duyệt web và các lớp bảo mật, truyền màn hình về ứng dụng. Khi bạn nhấp hoặc nhập, ứng dụng gửi thao tác về server. Giao diện này chỉ minh họa kiến trúc; chưa stream hoặc mở website thật.": "In this product concept, the Warden server handles browsing and security, then streams the screen to the app. Clicks and keystrokes are sent back to the server. This interface illustrates the architecture; it does not stream or open real websites.", "Tiến trình mô phỏng": "Simulation progress", "Kiểm tra 3 yêu cầu theo dõi": "Checking 3 tracking requests", "Sẵn sàng": "Ready", "Không ghi màn hình thật": "No real screen recording", "Chờ": "Waiting", "Địa chỉ minh họa": "Example address", "Bật bảo vệ Warden mô phỏng": "Enable simulated Warden protection", "Hiện mật khẩu": "Show password", "Ẩn mật khẩu": "Hide password", "Mã xác nhận của bạn": "Your verification code", "Có hiệu lực trong 60 giây": "Valid for 60 seconds", "Nhập mã xác nhận": "Enter verification code", "Nhập mã xác nhận 6 chữ số": "Enter the 6-digit verification code", "Nhấp phím để nhập dữ liệu thử. Vị trí phím giữ nguyên trong lúc nhập và chỉ xáo trộn khi đóng.": "Click the keys to enter test data. Keys stay in place while typing and shuffle only when the keyboard closes.", "Độ mạnh theo tiêu chí": "Strength by criteria", "Chưa nhập": "Not entered", "Từ 10 ký tự": "At least 10 characters", "Chữ hoa": "Uppercase letter", "Chữ số": "Number", "Ký tự đặc biệt": "Symbol", "Đề xuất mật khẩu mạnh": "Strong password suggestion", "Đừng lo quên, sử dụng mật khẩu đề xuất chúng tôi sẽ lưu trữ giúp bạn.": "No need to remember it: choose the suggested password and we will store it for you.", "Tạo lại": "Regenerate", "Dùng mật khẩu này": "Use this password", "Bản demo chỉ lưu tài khoản và mật khẩu mẫu trong bộ nhớ phiên. Tải lại trang sẽ xóa dữ liệu; chưa có kho lưu trữ trên máy chủ.": "This demo stores sample credentials in session memory only. Reloading clears the data; server storage is not connected.", "Mật khẩu đề xuất": "Suggested password", "Hiện mật khẩu đề xuất": "Show suggested password", "Giải thích lớp bảo vệ cùng AI": "Understand protection with AI", "Bàn phím ảo đảo phím hoạt động thế nào?": "How does the shuffled virtual keyboard work?", "OTP Authenticator khác SMS như thế nào?": "How does an authenticator OTP differ from SMS?", "Ý tưởng trình duyệt từ xa: Warden server chạy phiên duyệt web, xử lý các lớp bảo mật và truyền màn hình về ứng dụng; thao tác được gửi lại server. Bên dưới là các mô phỏng theo dõi màn hình và kho mật khẩu. Bản web chưa tạo phiên browser hoặc stream thật.": "Remote browser concept: the Warden server runs browsing and security, streaming the screen to the app while receiving user actions. Below are screen-tracking and password-vault simulations. This website does not start a real browser session or stream.", "Hỗ trợ khảo sát cùng AI": "Survey assistance with AI", "Tôi nên đánh giá các tính năng như thế nào?": "How should I rate the features?", "Eng": "Eng", "Viet": "Viet", "Đang kiểm tra": "Checking", "Hoàn tất": "Complete", "Đang xử lý yêu cầu mô phỏng": "Processing a simulated request", "Mạnh": "Strong", "Khá": "Good", "Yếu": "Weak", "Trung bình": "Fair", "Tin nhắn Warden": "Warden Messages", "Mã minh họa trong ứng dụng, chưa thiết lập TOTP thật": "Example app code; real TOTP is not configured", "Tin nhắn minh họa, chưa gửi SMS thật": "Example message; no real SMS was sent", "Mã thử có hiệu lực 60 giây.": "The test code is valid for 60 seconds.", "ĐIỆN THOẠI MÔ PHỎNG": "SIMULATED PHONE"};
const dictionary=new Map(pairs.trim().split('\n').map(line=>{const i=line.indexOf('|');return [line.slice(0,i),line.slice(i+1)]}));
let language='vi';const originals=new WeakMap(),attributeOriginals=new WeakMap();
Object.entries(extraPairs).forEach(([vi,en])=>dictionary.set(vi,en));
function translate(value){const clean=value.trim();if(dictionary.has(clean))return value.replace(clean,dictionary.get(clean));if(/^Ký tự /.test(clean))return value.replace(/^Ký tự /,'Character ');if(/^Hội thoại /.test(clean)){const x=clean.slice(10);return 'Conversation: '+(dictionary.get(x)||({'Hỗ trợ khôi phục':'Recovery support','Phân tích mã hash':'Hash analysis','Giải thích lớp bảo vệ':'Protection guidance','Hỗ trợ khảo sát':'Survey support'}[x])||x)}if(dictionary.has(clean))return value.replace(clean,dictionary.get(clean));
let m=clean.match(/^([1-5] · )(.+)$/);if(m&&dictionary.has(m[2]))return m[1]+dictionary.get(m[2]);
m=clean.match(/^Bước (\d+)(.*)$/);if(m)return 'Step '+m[1]+m[2].replace(/Nhu cầu & tần suất|Đánh giá giao diện|Mức sử dụng & gửi phản hồi/g,s=>dictionary.get(s));
m=clean.match(/^Hướng dẫn (\d+ \/ \d+)$/);if(m)return 'Guide '+m[1];
m=clean.match(/^(\d+)\/4 bước đã thực hiện(.*)$/);if(m)return m[1]+'/4 steps completed'+(m[2]?' · Checklist complete':'');
m=clean.match(/^(\d+)\/64 ký tự mẫu · Phím giữ nguyên đến khi đóng$/);if(m)return m[1]+'/64 test characters · Keys stay in place until closed';
m=clean.match(/^Mã chưa đúng\. Còn (\d+) lần thử\.$/);if(m)return 'Incorrect code. '+m[1]+' attempts remaining.';
m=clean.match(/^Định dạng (MD5|SHA-1|SHA-256) hợp lệ$/);if(m)return 'Valid '+m[1]+' format';
// Preserve icons/arrows and spacing around a complete translatable label.
const label=clean.replace(/^[ⓘ\s]+/,'').replace(/[\s→↗]+$/,'');if(dictionary.has(label)&&label!==clean)return value.replace(label,dictionary.get(label));
return value;}
function apply(){observer.disconnect();try{
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
while(node=walker.nextNode()){
const parent=node.parentElement;if(!parent||parent.closest('script,style,textarea,input,[data-language],.wroll-word,.message.user,.mono,.vault-info,#vk-value'))continue;
let record=originals.get(node);if(!record||node.nodeValue!==record.last)record={source:node.nodeValue,last:node.nodeValue};
if(parent.tagName==='OPTION'&&!parent.hasAttribute('value'))parent.setAttribute('value',parent.textContent);
const next=language==='en'?translate(record.source):record.source;if(node.nodeValue!==next)node.nodeValue=next;record.last=next;originals.set(node,record);
}
for(const el of document.querySelectorAll('[placeholder],[aria-label],[title]')){let record=attributeOriginals.get(el)||{};for(const attr of ['placeholder','aria-label','title']){if(!el.hasAttribute(attr))continue;const current=el.getAttribute(attr);if(!record[attr]||current!==record[attr].last)record[attr]={source:current,last:current};const next=language==='en'?translate(record[attr].source):record[attr].source;if(current!==next)el.setAttribute(attr,next);record[attr].last=next;}attributeOriginals.set(el,record);}
document.documentElement.lang=language;document.title=language==='en'?'Warden — Your security workspace':'Warden — Không gian bảo mật của bạn';
for(const button of document.querySelectorAll('[data-language]'))button.setAttribute('aria-pressed',String(button.dataset.language===language));
}finally{observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title']})}}
const observer=new MutationObserver(apply);
document.addEventListener('click',e=>{const button=e.target.closest('[data-language]');if(!button)return;language=button.dataset.language==='en'?'en':'vi';apply()});
window.WardenI18n={apply,translate,get language(){return language}};apply();
})();
