// app.js - إدارة المنصة والتنقل بين التبويبات والمستويات مع ربط تيليجرام
let currentStudentId = "child_01";

// بيانات بوت تيليجرام
const TELEGRAM_BOT_TOKEN = '8768723052:AAHIjOEj3B4GD4r3duVkaDNpxlB2C8NMbVw';
const TELEGRAM_CHAT_ID = '8768723052'; // تأكد أن هذا هو رقم الـ ID الصحيح لحسابك الشخصي الذي ظهر لك من البوت
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    updateChildProgressUI();
}

// دالة إرسال الرسالة إلى تيليجرام
async function sendToTelegram(messageText) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();
    if (data.ok) {
      console.log('تم إرسال الرسالة لتيليجرام بنجاح!');
    } else {
      console.error('خطأ أثناء الإرسال من تيليجرام:', data.description);
    }
  } catch (error) {
    console.error('تعذر الاتصال بـ Telegram API:', error);
  }
}

// إشعار عند إرسال الطالب رسالة
function onStudentSendMessage(studentName, teacherName, text) {
  const fullMessage = `📩 <b>رسالة جديدة من منصة فصولي</b>\n\n<b>الطالب:</b> ${studentName}\n<b>الموجه إليها:</b> ${teacherName}\n<b>الرسالة:</b> ${text}`;
  sendToTelegram(fullMessage);
}

// التبديل بين الأقسام الرئيسية (فصولي / كتبي / تقاريري / رسائلي / محفظتي)
function switchMainTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    const activeTab = Array.from(document.querySelectorAll('.tab-btn')).find(
        btn => btn.getAttribute('onclick')?.includes(tabName)
    );
    if (activeTab) activeTab.classList.add('active');

    if (tabName === 'classes') {
        showView('view-classes');
        updateChildProgressUI();
    } else if (tabName === 'books') {
        showView('view-books');
    } else if (tabName === 'reports') {
        showView('view-parent-dashboard');
    } else if (tabName === 'messages' || tabName === 'wallet') {
        alert("قسم " + (tabName === 'messages' ? "الرسائل" : "المحفظة") + " قيد التطوير حالياً.");
    }
}

function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(viewId)?.classList.add('active');
}

function switchUserRole(role) {
    if (role === 'child') {
        showView('view-classes');
        updateChildProgressUI();
    } else if (role === 'parent') {
        showView('view-parent-dashboard');
    } else if (role === 'teacher') {
        showView('view-teacher');
    }
}

/* النافذة المنبثقة للتسجيل والدخول */
function openLoginModal(mode) {
    const modal = document.getElementById('auth-modal') || document.getElementById('login-modal');
    const title = document.getElementById('modal-title');
    if (modal) {
        modal.style.display = 'flex';
        if (title) {
            title.innerText = mode === 'register' ? 'إنشاء حساب جديد' : 'تسجيل الدخول إلى المنصة';
        }
        goToAuthStep(1);
    }
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal') || document.getElementById('login-modal');
    if (modal) modal.style.display = 'none';
}

function goToAuthStep(stepNumber) {
    document.querySelectorAll('.auth-step').forEach(step => step.classList.remove('active'));
    const targetStep = document.getElementById(`auth-step-${stepNumber}`);
    if (targetStep) targetStep.classList.add('active');
}

// معالجة تسجيل الدخول بواسطة الشبكات الاجتماعية
function handleSocialAuth(provider) {
    alert(`جاري الاتصال بـ ${provider}... (تم التسجيل بنجاح)`);
    closeAuthModal();
    switchUserRole('child');
    
    // إرسال إشعار لتيليجرام عند تسجيل دخول مستخدم جديد
    sendToTelegram(`👤 <b>تسجيل دخول جديد</b>\n\nتم تسجيل الدخول عبر: ${provider}`);
}

function playPromoVideo() {
    alert("عرض الفيديو الترويجي لمنصة النجوى والدمج الذكي...");
}

/* الكاميرا التفاعلية والصوتيات للقدرات الخاصة */
async function startCameraSafe() {
    const camBox = document.getElementById('cam-box');
    const webcam = document.getElementById('webcam');
    const overlay = document.getElementById('gesture-overlay');

    if (camBox) camBox.style.display = 'block';

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (webcam) webcam.srcObject = stream;
        if (overlay) overlay.innerText = "الكاميرا متصلة.. بانتظار إشارات اليد ✋";
    } catch (err) {
        if (overlay) overlay.innerText = "❌ تعذر فتح الكاميرا، تأكد من الصلاحيات.";
    }
}

function listenToVoiceCommand() {
    const speechResult = document.getElementById("speech-result");
    if (speechResult) speechResult.innerText = "🎙️ جاري الاستماع للأمر الصوتي...";

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'ar-SA';
        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.trim();
            if (speechResult) speechResult.innerText = `🎙️ الكلمة المسموعة: "${transcript}"`;
            if (transcript.includes("افتح")) startCameraSafe();
        };
    } else {
        alert("متصفحك لا يدعم التعرف الصوتي المباشر.");
    }
}

function simulateGesture(sign, word) {
    const detectedBox = document.getElementById("detected-sign-text");
    if (detectedBox) detectedBox.innerText = `تم التعرف على الإشارة: (${sign}) - ${word}`;
    increaseStudentProgress(10);
}

function readLessonQuestion() {
    const questionText = "ما هو الحرف الأول من كلمة أسد؟";
    const speechResult = document.getElementById("speech-result");
    if (speechResult) speechResult.innerText = "🔊 " + questionText;

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(questionText);
        utterance.lang = 'ar-SA';
        window.speechSynthesis.speak(utterance);
    }
}

function listenToChildAnswer() {
    const speechResult = document.getElementById("speech-result");
    if (speechResult) speechResult.innerHTML = "🎙️ الإجابة: <strong>(صحيحة 🎉 أحسنت!)</strong>";
    increaseStudentProgress(15);
}

function increaseStudentProgress(amount) {
    const progressBar = document.getElementById("lesson-progress-bar");
    if (progressBar) {
        let currentWidth = parseInt(progressBar.style.width) || 25;
        let newWidth = Math.min(100, currentWidth + amount);
        progressBar.style.width = newWidth + "%";
        
        const statusText = document.getElementById("lesson-status-text");
        if (statusText) statusText.innerText = `أنجزت ${newWidth}% من دروس هذا الأسبوع! واصل التميز ⭐`;
    }
}

function updateChildProgressUI() {
    const progressBar = document.getElementById("lesson-progress-bar");
    const statusText = document.getElementById("lesson-status-text");
    if (progressBar && statusText) {
        progressBar.style.width = "25%";
        statusText.innerText = "أنجزت 25% من دروس هذا الأسبوع! واصل التميز ⭐";
    }
}

function toggleCalmMode() {
    document.body.classList.toggle("calm-mode");
}

function requestMediaPermissions() {
    startCameraSafe();
}

// ======================== قواعد الفاليديشن والتسجيل ========================

function validateName() {
    const nameInput = document.getElementById('reg-name');
    const nameError = document.getElementById('name-error');
    if (!nameInput || !nameError) return true;
    const nameVal = nameInput.value.trim();

    if (nameVal === '') {
        showError(nameInput, nameError, 'برجاء إدخال الاسم بالكامل');
        return false;
    } else if (nameVal.length < 3) {
        showError(nameInput, nameError, 'يجب أن يتكون الاسم من 3 حروف على الأقل');
        return false;
    } else {
        clearError(nameInput, nameError);
        return true;
    }
}

function validateEmail() {
    const emailInput = document.getElementById('reg-email');
    const emailError = document.getElementById('email-error');
    if (!emailInput || !emailError) return true;
    const emailVal = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailVal === '') {
        showError(emailInput, emailError, 'البريد الإلكتروني مطلوب');
        return false;
    } else if (!emailRegex.test(emailVal)) {
        showError(emailInput, emailError, 'صيغة البريد الإلكتروني غير صحيحة');
        return false;
    } else {
        clearError(emailInput, emailError);
        return true;
    }
}

function validatePassword() {
    const passInput = document.getElementById('reg-password');
    const passError = document.getElementById('pass-error');
    if (!passInput || !passError) return true;
    const passVal = passInput.value;

    if (passVal === '') {
        showError(passInput, passError, 'كلمة المرور مطلوبة');
        return false;
    } else if (passVal.length < 6) {
        showError(passInput, passError, 'يجب أن تحتوي كلمة المرور على 6 خانات على الأقل');
        return false;
    } else {
        clearError(passInput, passError);
        return true;
    }
}

function validateRole() {
    const roleSelect = document.getElementById('reg-role');
    const roleError = document.getElementById('role-error');
    if (!roleSelect || !roleError) return true;

    if (roleSelect.value === '') {
        showError(roleSelect, roleError, 'برجاء تحديد نوع الحساب');
        return false;
    } else {
        clearError(roleSelect, roleError);
        return true;
    }
}

function validateTerms() {
    const termsCheck = document.getElementById('reg-terms');
    const termsError = document.getElementById('terms-error');
    if (!termsCheck || !termsError) return true;

    if (!termsCheck.checked) {
        termsError.innerText = 'يجب الموافقة على الشروط والمتابعة';
        return false;
    } else {
        termsError.innerText = '';
        return true;
    }
}

function showError(inputEl, errorEl, message) {
    inputEl.classList.add('invalid');
    errorEl.innerText = message;
}

function clearError(inputEl, errorEl) {
    inputEl.classList.remove('invalid');
    errorEl.innerText = '';
}

// فحص الشروط بالكامل وإرسال إشعار تيليجرام عند نجاح التسجيل
function handleRegistrationSubmit(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPassValid = validatePassword();
    const isRoleValid = validateRole();
    const isTermsValid = validateTerms();

    if (isNameValid && isEmailValid && isPassValid && isRoleValid && isTermsValid) {
        const selectedRole = document.getElementById('reg-role').value;
        const studentName = document.getElementById('reg-name').value;
        
        alert('🎉 تم إنشاء الحساب بنجاح!');
        closeAuthModal();
        switchUserRole(selectedRole);

        // إرسال تنبيه فوري عبر بوت تيليجرام بانضمام مستخدم جديد
        sendToTelegram(`✨ <b>مستخدم جديد انضم إلى منصة فصولي!</b>\n\n<b>الاسم:</b> ${studentName}\n<b>نوع الحساب:</b> ${selectedRole}`);
    }
}