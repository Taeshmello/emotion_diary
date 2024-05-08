import { useSearchParams } from "react-router-dom";
const Home = () => {
    const [params, setParams] = useSearchParams();
    return(
        <div>
            홈입니다.
        </div>
    )
}

export default Home;