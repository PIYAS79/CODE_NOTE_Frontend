import { useGetAllAcademicSemesterQuery } from "../../redux/api/academicsemesterApi"


const GetAllAcSemester = () => {


  const {data} = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);


  return (
    <div>GetAllAcSemester</div>
  )
}

export default GetAllAcSemester