
const boxEffects = {
    'html-box': 'grow',
    'css-box': 'grayscale',
    'js-box': 'grayscale',
    'python-box': 'grayscale',
    'csharp-box': 'grow',
    'cpp-box': 'grayscale',
    'java-box': 'grayscale',
    'ts-box': 'grayscale'
};


const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const boxId = box.id;
    const effect = box.getAttribute('data-effect') || boxEffects[boxId];
    
    box.addEventListener('mouseenter', () => {
        if (effect === 'grow') {

            box.style.transform = 'scale(1.2)';
            box.style.transition = 'transform 0.3s ease-in-out';
        } else if (effect === 'grayscale') {

            box.style.filter = 'grayscale(90%)';
            box.style.transition = 'filter 0.3s ease-in-out';
        }
    });
    

    box.addEventListener('mouseleave', () => {
        if (effect === 'grow') {

            box.style.transform = 'scale(1)';
        } else if (effect === 'grayscale') {

            box.style.filter = 'grayscale(40%)';
        }
    });
});
