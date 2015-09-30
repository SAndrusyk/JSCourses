test('assertions', function() {
    equal(sum(4,7),11, 'positive + positive = positive');
    equal(sum(0,0),0, 'zero + zero = zero');
    equal(sum(-1,-5),-6, 'negative + negative = negative');
    equal(sum(4,-5),-1, 'if negative > positive, answer is negative');
    equal(sum(4,-3),1, 'if negative < positive, answer is positive');
    equal(sum(4,-4),0, 'if negative = positive, answer is zero');
    equal(sum(Infinity,5),Infinity, 'Infinity + positive = Infinity');
    equal(sum(Infinity,-5),Infinity, 'Infinity + negative = Infinity');
    equal(sum(Infinity,Infinity),Infinity, 'Infinity + Infinity = Infinity');
});