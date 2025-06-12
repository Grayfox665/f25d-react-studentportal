import CourseCard from "../components/CourseCard";

export default function Courses() {
  return (
    <div>
      <h2>Heres the Courses page</h2>
      <p>Insert list of courses in card form here.</p>
      <div className="container row-md row-cols-2 align-items-start ">
        <div className="row justify-content-around">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}
