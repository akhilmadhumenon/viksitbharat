export interface RequestWorkflow {
    id: string;
    stage: string;
    status: 'pending' | 'completed' | 'delayed';
    assignedTo: string;
    startDate: string;
    endDate?: string;
    comments?: string;
  }
  
  export interface FundRequest {
    id: number;
    title: string;
    location: string;
    amount: string;
    status: 'pending' | 'approved' | 'rejected';
    submittedBy: string;
    date: string;
    workflow: RequestWorkflow[];
  }