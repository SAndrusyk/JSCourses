test('Sum functions', function() {
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

test('Check prime number', function(){
    ok(!checkPrime(1), "1 is not a prime number.");
    ok(!checkPrime(4), "4 is not a prime number.");
    ok(!checkPrime(9), "9 is not a prime number.");
    ok(checkPrime(2), "2 is a prime number.");
    ok(checkPrime(5), "5 is a prime number.");
    ok(!checkPrime(10), "10 is not a prime number.");
    ok(checkPrime(1987), "1987 is a prime number.");
    ok(checkPrime(23), "23 is a prime number.");
});



test('checkPhonenumber', function() {
    equal(checkPhonenumber('+38(097)125-34-89'),'Kyivstar', "+38(097)1253489 Kyivstar's number");
    equal(checkPhonenumber('503-314-485'),'MTS', '503-314-485 MTS');
    equal(checkPhonenumber('98-547-58-56'),'Kyivstar', "98-54758-56 Kyivstar's number");
    equal(checkPhonenumber('+380919875462'),'UTEL', ' +380919875462 UTEL');
    equal(checkPhonenumber('+38-094-584-95-86'),'InterTelecom', ' +38-094-584-95-86 InterTelecom');
    equal(checkPhonenumber('+380635849586'),'Life', ' +380635849586 Life');

});
