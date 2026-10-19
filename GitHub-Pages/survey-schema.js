/* Shared survey contract. Used by browser, Worker and Google Apps Script. */
(function(root){
const features=[['recovery','Khôi phục tài khoản'],['explain','Giải thích cảnh báo'],['hash','Tra mã hash'],['browser','Trình duyệt bảo mật'],['vault','Kho mật khẩu & OTP'],['protection','Bảo vệ bằng AI']];
const frequency=['Hằng ngày','Vài lần mỗi tuần','Vài lần mỗi tháng','Chỉ khi gặp sự cố','Không sử dụng','Chưa biết'];
const ability=['Tự sử dụng được','Sử dụng được khi có hỗ trợ','Đã thử nhưng chưa sử dụng được','Chưa thử'];
const questions=[
'Với nhu cầu của bạn, từng tính năng sau của Warden quan trọng ở mức nào?',
'Có tính năng nào bạn cho rằng không cần thiết đối với mình không? Vì sao?',
'Nếu Warden được phát hành với các tính năng vừa trải nghiệm, bạn dự kiến sử dụng từng tính năng với tần suất nào?',
'Điều gì khiến bạn chưa hài lòng khi trải nghiệm Warden?',
'Bạn đánh giá mức độ rối mắt của giao diện Warden như thế nào?',
'Bạn thấy việc tìm và sử dụng các chức năng trong Warden dễ hay khó?',
'Bạn muốn Warden bổ sung tính năng nào? Tính năng đó sẽ giúp bạn giải quyết việc gì?',
'Bạn có góp ý nào khác để nhóm cải thiện Warden không?',
'Trong lần dùng thử vừa rồi, bạn sử dụng các tính năng ở mức nào?'];
const headers=['Thời gian nhận (UTC)','Mã phản hồi','Phiên bản khảo sát','Email tự nguyện',...features.map(f=>'Q1 Quan trọng — '+f[1]),'Q2 Không cần thiết','Q2 Lý do',...features.map(f=>'Q3 Tần suất — '+f[1]),'Q4 Chưa hài lòng','Q5 Rối mắt (1–5)','Q6 Dễ sử dụng (1–5)','Q7 Tính năng muốn thêm','Q8 Góp ý khác',...features.map(f=>'Q9 Trải nghiệm — '+f[1]),'Đồng ý gửi khảo sát'];
function validate(d){if(!d||typeof d!=='object'||d.version!=='warden-survey-v1'||typeof d.id!=='string'||!/^[a-zA-Z0-9-]{16,64}$/.test(d.id))return 'Mã khảo sát không hợp lệ.';
if(d.consent!==true)return 'Vui lòng đồng ý gửi câu trả lời cho nhóm Warden.';
if(typeof d.email!=='string'||d.email.length>254||(d.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)))return 'Email chưa hợp lệ.';
for(const [k] of features){if(!Number.isInteger(d.importance?.[k])||d.importance[k]<1||d.importance[k]>5)return 'Câu 1: hãy đánh giá đủ các tính năng.';if(!frequency.includes(d.frequency?.[k]))return 'Câu 3: hãy chọn tần suất cho từng tính năng.';if(!ability.includes(d.ability?.[k]))return 'Câu 9: hãy chọn mức sử dụng cho từng tính năng.'}
if(!Array.isArray(d.unnecessary)||!d.unnecessary.length||new Set(d.unnecessary).size!==d.unnecessary.length||d.unnecessary.some(v=>v!=='none'&&!features.some(f=>f[0]===v))||(d.unnecessary.includes('none')&&d.unnecessary.length>1))return 'Câu 2: chọn tính năng hoặc chỉ chọn Không có.';
for(const key of ['reason','dissatisfaction','addition','feedback'])if(typeof d[key]!=='string'||d[key].length>2000)return 'Nội dung trả lời phải dưới 2.000 ký tự.';
if(!d.reason.trim()||!d.dissatisfaction.trim())return 'Vui lòng trả lời câu 2 và 4; có thể ghi Không có.';
if(![d.clutter,d.ease].every(n=>Number.isInteger(n)&&n>=1&&n<=5))return 'Câu 5 và 6: hãy chọn mức từ 1 đến 5.';
return ''}
function literal(v){return typeof v==='string'&&/^[\s]*[=+\-@]/.test(v)?"'"+v:v}
function row(d,now){return [now,d.id,d.version,d.email,...features.map(f=>d.importance[f[0]]),d.unnecessary.map(k=>k==='none'?'Không có':features.find(f=>f[0]===k)[1]).join('; '),d.reason,...features.map(f=>d.frequency[f[0]]),d.dissatisfaction,d.clutter,d.ease,d.addition,d.feedback,...features.map(f=>d.ability[f[0]]),'Có'].map(literal)}
root.WardenSurvey={features,frequency,ability,questions,headers,validate,row};
})(globalThis);
