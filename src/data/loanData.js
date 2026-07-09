// Mock data shaped the way a real /api/loans/:id response would look.
// Swap `fetchLoan()` in hooks/useLoan.js for a real request — nothing
// else needs to change since components only consume this shape.

export const mockLoan = {
  id: '2026-04892',
  applicantName: 'Rahul Verma',
  status: 'Processed',
  breadcrumb: ['RMS', 'Disbursement', 'Rahul Verma'],
  loanTypeLabel: 'Home Loan',
  

  summary: [
    { label: 'Total Sanctioned Amount', value: 480000 },
    { label: 'Total Disbursement Amount', value: 4275000 },
    { label: 'Commission Income', value: 52450 },
    { label: 'Referral Fee', value: 18750 },
    { label: 'Net Income', value: 71200, highlight: true },
  ],

  applicants: [
    { name: 'Rahul Verma', type: 'Applicant', email: 'rahul.verma@gmail.com', phone: '+91 9876543210' },
    { name: 'Priya Sharma', type: 'Co-Applicant', email: 'priya.sharma@gmail.com', phone: '+91 9123456789' },
    { name: 'Neha Gupta', type: 'Co-Applicant', email: 'neha.gupta@gmail.com', phone: '+91 9988776655' },
  ],

  loanDetails: {
    loanId: 'Loan - 2026-04892',
    loanType: 'Home Loan',
    bank: 'HDFC Bank - (Adyar Branch)',
    stage: 'Lead',
    sanctionedDate: '22/11/2024',
    sanctionedAmount: 480000,
    verifiedSanctionedAmount: 480000,
    bankExecutive: 'Amit Sharma',
    creditExecutive: 'Preethi Sharma',
    source: 'Ramesh Kumar',
  },

  disbursements: [
    { id: 'DB002-24-1001', date: '22-11-2024', amount: 480000, verifiedAmount: 480000, utr: '426715893247', tranche: 'Full', status: 'Processed' },
    { id: 'DB002-24-1001', date: '23-11-2024', amount: 525000, verifiedAmount: 525000, utr: '426715893248', tranche: 'Full', status: 'Processed' },
    { id: 'DB002-24-1001', date: '24-11-2024', amount: 600000, verifiedAmount: 600000, utr: '426715893249', tranche: 'Full', status: 'Processed' },
    { id: 'DB002-24-1001', date: '25-11-2024', amount: 675000, verifiedAmount: 700000, utr: '426715893250', tranche: 'Full', status: 'Processed', mismatch: true },
  ],

  commission: {
    total: 28640,
    rows: [
      { party: 'Amit Sharma', subCode: 0.75, gross: 0.75, amount: 3400, invoiceNo: 'RMS-INV-2026-00156', invoiceStatus: 'Paid' },
      { party: 'Anjali Mehta', subCode: 0.85, gross: 1.25, amount: 4200, invoiceNo: 'RMS-INV-2026-00157', invoiceStatus: 'Paid' },
      { party: 'Ravi Kumar', subCode: 0.90, gross: 1.50, amount: 5000, invoiceNo: 'RMS-INV-2026-00158', invoiceStatus: 'Paid' },
      { party: 'Sneha Iyer', subCode: 1.00, gross: 2.00, amount: 6300, invoiceNo: 'RMS-INV-2026-00159', invoiceStatus: 'Paid' },
    ],
  },

  broker: {
    totalReferralFee: 8640,
    rows: [
      { name: 'Amit Sharma', code: 'CON-001', tag: 'Aggregator', commissionPct: 0.75, referralFee: 3020, poNo: 'RMS-PO-2026-00089', poDate: '22-11-2024', poStatus: 'Paid' },
      { name: 'Ravi Patel', code: 'CON-002', tag: 'Sub-connector', commissionPct: 0.85, referralFee: 2875, poNo: 'RMS-PO-2026-00090', poDate: '23-11-2024', poStatus: 'Paid' },
      { name: 'Amit Sharma', code: 'CON-001', tag: 'Aggregator', commissionPct: 0.90, referralFee: 2980, poNo: 'RMS-PO-2026-00091', poDate: '24-11-2024', poStatus: 'Paid' },
      { name: 'Sita Verma', code: 'CON-003', tag: 'Aggregator', commissionPct: 1.00, referralFee: 3150, poNo: 'RMS-PO-2026-00091', poDate: '24-11-2024', poStatus: 'Paid' },
    ],
  },

  notes: "Party applied for a home loan for property purchase in Chennai. Documents verified successfully and income proof has been submitted. Awaiting final bank approval and disbursement confirmation.",

  documents: [
    { name: 'Invoices.pdf', size: '800 KB' },
    { name: 'Invoices.pdf', size: '800 KB' },
    { name: 'Invoices.pdf', size: '800 KB' },
    { name: 'Invoices.pdf', size: '800 KB' },
  ],
}
