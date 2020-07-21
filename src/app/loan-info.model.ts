export class LoanInfo {

    loanId: number;
    borrowerName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zip: number;
    loanNumber: string;
    loanAmount: number;
    loanTerm: number;
    lienID: string;
    lienType: string;
    legalDescription: string;

    constructor() {
        this.borrowerName = ''
        this.addressLine1 = ''
        this.addressLine2 = ''
        this.city = ''
        this.state = ''
        this.zip = 0
        this.loanAmount = 0
        this.loanTerm = 0
        this.lienID = ''
        this.lienType = ''
        this.legalDescription = ''
        this.loanNumber = ''
        this.loanId = 0
    }
}
