export interface EmployeeSchedule {
    id: number;
    employeeId: number;
    officeLocationId: number;
    employeeRoleId: number;
    date: Date;
    startTime: Date;
    endTime: Date;
    notes: string;
}
