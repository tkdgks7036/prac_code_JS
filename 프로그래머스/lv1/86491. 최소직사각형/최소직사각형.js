function solution(sizes) {
    let width = [];
    let height = [];

    for (let i = 0; i < sizes.length; i++) {
        width.push(Math.max(...sizes[i]));
        height.push(Math.min(...sizes[i]));
    };

    let width_max = Math.max(...width);
    let height_max = Math.max(...height);

    return width_max * height_max;
};