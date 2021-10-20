import {useState, useEffect} from 'react';
import Style from './DemoFetch.module.css';
export const DemoFetch = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => {
            result.json()
            .then(result => {
                setData(result);
                console.table(result);
                setTimeout(() => {
                    setLoader(false);
                }, 3000);
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })
        console.clear();
    }, []);
    return (<>
        <h1 className={Style.demo__header} >Demo Fetch API</h1>
        {loader ? <h1>Loading ....</h1> : ''}
        <table>
            <thead>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </thead>
            <tbody>
                {
                    data.map( (item, index) => (
                        <tr key={index} >
                            <td>{++index}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>); 
}

