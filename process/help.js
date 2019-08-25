var options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform'
];

exports.showOptions = function() {
    console.log('Digite: node index.js {option}');
    options.forEach((option) => console.log(option));
};