<script>
  // Компонент для взаимодействия с камнями при наступлении
  AFRAME.registerComponent('interactive-rock', {
    init: function () {
      const el = this.el;

      // Добавляем событие на столкновение
      el.addEventListener('collide', (e) => {
        const collidedWith = e.detail.body.el;

        // Проверяем, что объект столкновения — камера игрока
        if (collidedWith && collidedWith.getAttribute('camera')) {
          // Воспроизведение звука
          const sound = el.components.sound;
          if (sound) {
            sound.playSound();
          }

          // Анимация "утопления" камня
          el.setAttribute('animation', {
            property: 'position',
            to: `${el.object3D.position.x} ${el.object3D.position.y - 0.2} ${el.object3D.position.z}`,
            dur: 300,
            easing: 'easeInOutQuad',
            loop: false,
          });

          // Восстановление положения после анимации
          setTimeout(() => {
            el.setAttribute('animation', {
              property: 'position',
              to: `${el.object3D.position.x} ${el.object3D.position.y + 0.2} ${el.object3D.position.z}`,
              dur: 300,
              easing: 'easeInOutQuad',
              loop: false,
            });
          }, 300);
        }
      });
    },
  });
  window.addEventListener('error', (e) => console.error('Ошибка:', e.message));

</script>