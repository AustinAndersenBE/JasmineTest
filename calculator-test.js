describe("Loan Calcuator", function () {

  it('should calculate the monthly rate correctly', function () {
  
    const values = { amount: 10000, years: 7, rate: 5.85};

    const monthly = calculateMonthlyPayment(values)

    expect(monthly).toEqual('145.37')
  });


it("should return a result with 2 decimal places", function() {
  const values = { amount: 10000, years: 7, rate: 5.85};
  const monthly = calculateMonthlyPayment(values);

  expect(monthly.split('.')[1].length).toEqual(2);
  });

})
/// etc
