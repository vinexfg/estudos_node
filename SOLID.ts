// class ReportProcessor {
//   process(reportType: string) {
//     if (reportType === "PDF") {
//       console.log(`processing pdf report...`);
//     } else if (reportType === "CSV") {
//       console.log("processing csv report...");
//     } else {
//       console.log("unknown report type! ");
//     }
//   }
// }

// const processado = new ReportProcessor();
// processado.process("PDF");
// processado.process("CSV");

// class DiscountCalculator{
//     calculateDiscount(userType: string): number {
//         if(userType === "Premium"){
//             return 20
//         }else if(userType === "regular"){
//             return 10;
//         }else {
//             return 0
//         }
//     }
// }



interface FieldValidator {
    validate(value: string): boolean;
}

class EmailValidator implements FieldValidator {
    validate(value: string): boolean {
        return /\S+@\S+\.\S+/.test(value);
    }
}

class PhoneValidator implements FieldValidator {
    validate(value: string): boolean {
        return /^\d{10,11}$/.test(value);
    }
}

class Validator {
    validate(fieldValidator: FieldValidator, value: string): boolean {
        return fieldValidator.validate(value);
    }
}

const validator = new Validator();
console.log(validator.validate(new EmailValidator(), "teste@exemplo.com"));
console.log(validator.validate(new PhoneValidator(), "11987654321"));