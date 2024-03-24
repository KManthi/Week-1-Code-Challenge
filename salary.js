function calculateNetSalary(basicSalary, benefits) {

 // Declaration of different rates and deductions.

    const payeRates = [
        {min: 0, max: 24000, rate: 0.1},
        {min: 24001, max: 32333, rate: 0.25},
        {min: 32334, max: 5000000, rate: 0.3},
        {min: 5000001, max: 8000000, rate: 0.325},
        {min: 8000001, max: Infinity, rate: 0.35}
    ];

    const nhifRates = [
        {min: 0, max: 5999, deduction: 150},
        {min: 6000, max: 7999, deduction: 300},
        {min: 8000, max: 11999, deduction: 400},
        {min: 12000, max: 14999, deduction: 500},
        {min: 15000, max: 19999, deduction: 600},
        {min: 20000, max: 24999, deduction: 750},
        {min: 25000, max: 29999, deduction: 850},
        {min: 30000, max: 34999, deduction: 900},
        {min: 35000, max: 39999, deduction: 950},
        {min: 40000, max: 44999, deduction: 1000},
        {min: 45000, max: 49999, deduction: 1100},
        {min: 50000, max: 59999, deduction: 1200},
        {min: 60000, max: 69999, deduction: 1300},
        {min: 70000, max: 79999, deduction: 1400},
        {min: 80000, max: 89999, deduction: 1500},
        {min: 90000, max: 99999, deduction: 1600},
        {min: 100000, max: Infinity, deduction: 1700}
    ];

    const nssfFirstTierLImit = 7000;
    const nssfSecondTierLimit = 36000;
    const housingLevyRate = 0.015;

    // Gross Salary calculator
    const grossSalary = basicSalary + benefits;

    //PAYE calculations
    let paye = 0;
    let taxableIncome = grossSalary;
    for (const { min, max, rate } of payeRates) {
        if (taxableIncome <= 0) break;
        const taxableAmount = Math.min(max - min, taxableIncome);
        paye += taxableAmount * rate;
        taxableIncome -= taxableAmount;
    }

    // NHIF calculations
    let nhif = 0;
    for (const { min, max, deduction } of nhifRates) {
        if (grossSalary > min && grossSalary <= max) {
            nhif = deduction;
            break;
        }
    }
    
    // NSSF calculations
    let nssf = 0;
    if (grossSalary <= nssfFirstTierLImit) {
        nssf = grossSalary * 0.06;
    } else if (grossSalary > nssfFirstTierLImit && grossSalary <= nssfSecondTierLimit) {
        nssf = nssfFirstTierLImit * 0.06  + (grossSalary - nssfFirstTierLImit) * 0.06;
    } else {
        nssf = nssfFirstTierLImit * 0.06 + (nssfSecondTierLimit - nssfFirstTierLImit) * 0.06;
    }

    //Housing Levy calculations
    const housingLevy = grossSalary * housingLevyRate;

    //Net salary calculator
    const netSalary = grossSalary - paye - nhif - nssf - housingLevy;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        housingLevy: housingLevy,
        netSalary : netSalary
    };
}