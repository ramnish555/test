import React from 'react';
import { useLocation, useHistory} from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const history = useHistory();

    if(location.state === undefined){
        history.push(`/login`);
    }

    return(
        <>
            <div className="text-center">
                <span>Name &rarr; {location.state.name}</span>
            </div>
            <div style={{"padding": "1rem"}}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Karan</td>
                            <td>15</td>
                            <td>M</td>
                            <td>karan777@gmail.com</td>
                            <td>Punjab</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Rahul</td>
                            <td>23</td>
                            <td>M</td>
                            <td>rahul32@gmail.com</td>
                            <td>Karnataka</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Lovely</td>
                            <td>20</td>
                            <td>F</td>
                            <td>lchandra234@gmail.com</td>
                            <td>Odisha</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Harman</td>
                            <td>19</td>
                            <td>M</td>
                            <td>hmaan7728@gmail.com</td>
                            <td>Haryana</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Rohit</td>
                            <td>26</td>
                            <td>M</td>
                            <td>rohit290@gmail.com</td>
                            <td>Bihar</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Rinky</td>
                            <td>18</td>
                            <td>F</td>
                            <td>rinky777@gmail.com</td>
                            <td>Gujarat</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Arjun</td>
                            <td>16</td>
                            <td>M</td>
                            <td>adasan126@gmail.com</td>
                            <td>Delhi</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Home;