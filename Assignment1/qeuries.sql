select count(*),M_Id ,if(cast( GETDATE() as Today)>Expiration_Date, "Expired", "Active") as status
from Medication_Prescribed,Medication
where MedicationID = M_Id  
group by M_Id


select DoctorID,Field,Degree,D_ID,Time,PatientName
from Doctor,Department,Doctor_Patient,Patient
where Doc_ID=DoctorID and DepartmentID=D_ID and Age>12 and Time not between cast('1-1-2022' as DATE) and cast('12-31-2022' as DATE)
order by PatientName DESC ,DoctorID asc;