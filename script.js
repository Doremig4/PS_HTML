document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const alertButton = document.querySelector('.button');
    alertButton.addEventListener('click', (event) => {
        event.preventDefault();
        const alertBox = document.createElement('div');
        alertBox.textContent = '당신은 남자입니다!😱';
        alertBox.style.position = 'fixed';
        alertBox.style.bottom = '-50px'; // 애니메이션 시작 위치
        alertBox.style.left = '50%';
        alertBox.style.transform = 'translateX(-50%)';
        alertBox.style.backgroundColor = '#ffcc00';
        alertBox.style.color = '#000';
        alertBox.style.padding = '20px';
        alertBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        alertBox.style.zIndex = '1000';
        alertBox.style.borderRadius = '10px'; // 굴곡 추가
        alertBox.style.opacity = '0';
        alertBox.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out'; // 애니메이션 속도 변경
        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.style.opacity = '1';
            alertBox.style.transform = 'translateX(-50%) translateY(-750%)';
        }, 10);
        setTimeout(() => {
            alertBox.style.transform = 'translateX(-50%) translateY(-750%)';
        }, 310);
        setTimeout(() => {
            alertBox.style.transform = 'translateX(-50%) translateY(-750%)';
        }, 610);
        setTimeout(() => {
            alertBox.style.opacity = '0'; // 페이드아웃 효과 추가
            setTimeout(() => {
                alertBox.remove();
            }, 300);
        }, 2000);
    });
});