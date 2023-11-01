import Program from "@/components/Program"
import { CourseData } from "@/data";

export default function ProgramPage({ params }) {
    const type = params.type;
    const courses = CourseData.filter(item => item.discipline.toLowerCase() === type.toLowerCase());

    return (
        <div className="mt-32">
            <div className="bg-white mt-32">
                <div className="w-3/4 grid md:grid-cols-2 gap-5 mx-auto rounded-md">
                    {
                        courses.map((course, i) => {                            
                            return (
                                <Program key={i} name={course.name} discipline={course.discipline} metadata={course.metadata.professor} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
