// interface Report {
//   process(): void;
// }

// class PDFReport implements Report {
//   process() {
//     console.log("Processing PDF report...");
//   }
// }

// class CSVReport implements Report {
//   process() {
//     console.log("Processing CSV report...");
//   }
// }

// class ReportProcessor {
//   process(report: Report) {
//     report.process();
//   }
// }

interface DiscountStrategy {
  calculate(): number;
}

class PremiumDiscount implements DiscountStrategy {
  calculate() {
    return 10;
  }
}

class RegularDiscount implements DiscountStrategy {
  calculate() {
    return 10;
  }
}

class NoDiscount implements DiscountStrategy {
  calculate() {
    return 0;
  }
}

class DiscountCalculator {
  calculateDiscount(strategy: DiscountStrategy): number {
    return strategy.calculate();
  }
}

const discountCalculator = new DiscountCalculator();
console.log(discountCalculator.calculateDiscount(new PremiumDiscount()));
