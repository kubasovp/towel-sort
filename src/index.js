// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix)) {
        const newArr = [];
        matrix.forEach((el, index) => {
            if (index % 2) {
                newArr.push(...el.reverse());
            } else {
                newArr.push(...el);
            }
        });
        return newArr;
    } else {
        return [];
    }
};
