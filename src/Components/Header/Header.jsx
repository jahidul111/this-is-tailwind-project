import  Profiler  from "../../assets/images/profile.png";
const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 mx-4 border-b-4">
            <h1 className="text-6xl font-bold">
                Knowledge Cafe
            </h1>
            <img src={Profiler} alt="" />
            
        </div>
    );
};

export default Header;