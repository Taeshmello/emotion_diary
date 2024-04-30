import { useParams } from "react-router-dom";
const Diary = () => {
   const params = useParams();
   console.log(params)
    return(
        
        <div>
            {params.id}번쨰 일기장
        </div>
    )
}

export default Diary;