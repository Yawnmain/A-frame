<script>
  // Компонент для добавления взаимодействия с кристаллами
  AFRAME.registerComponent('interactive-crystal', {
    init: function () {
      const el = this.el;

      // Событие на взаимодействие (например, "click" от курсора или контроллера)
      el.addEventListener('click', () => {
        
        // Воспроизведение звука
        const sound = el.components.sound;
        if (sound) {
          sound.playSound();
        }

        // Анимация качания кристалла из стороны в сторону
        el.setAttribute('animation', {
          property: 'rotation',
          to: `0 0 5`, // Поворот на 10 градусов по оси Z
          dur: 200, // Длительность анимации
          easing: 'easeInOutQuad',
          loop: true,
          dir: 'alternate' // Сделать анимацию в обе стороны
        });

        // Остановка анимации через 1 секунду, чтобы кристалл вернулся в исходное положение
        setTimeout(() => {
          el.setAttribute('animation', {
            property: 'rotation',
            to: '0 0 0', // Возвращаем кристалл в начальную позицию
            dur: 200,
            easing: 'easeInOutQuad',
            loop: false
          });
        }, 1000); // Останавливаем через 1 секунду
      });
    },
  });
</script>