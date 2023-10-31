import Program from "@/components/Program"

export default function ProgramPage() {
    return (
        <div className="mt-32">
            {/* <Navbar/> */}
            <div className="bg-white mt-32">
                <div className="w-3/4 grid md:grid-cols-2 gap-5 mx-auto rounded-md">
                    <Program name="Computer Science" description="Engineer degree" author="Prof. abc, PEC Chd." />
                    <Program name="MBBS" description="Doctor degree" />
                    <Program name="Comp Sci" description="CSE degree" />
                    
                </div>
            </div>
        </div>
    );
}
