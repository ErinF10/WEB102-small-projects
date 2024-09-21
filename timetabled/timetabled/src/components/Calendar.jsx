import React from "react";
import Event from "./Event"

const Calendar = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="time">9am</td>
                    <Event name="WEB102" color="green"/>
                    <td></td>
                    <Event name="CISC 2202" color="pink" />
                    <td></td>
                    <Event name="CISC 2202" color="pink" />
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">10am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11am</td>
                    <td></td>
                    <Event name="MATH 4220" color="pink"/>
                    <td></td>
                    <Event name="MATH 4220" color="pink"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12pm</td>
                    <td></td>
                    <td></td>
                    <Event name="CYB102" color="green" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event name="Resume review" color="blue" />
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2pm</td>
                    <Event name="Office hours" color="yellow" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event name="Office hours" color="yellow" />
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">6pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar