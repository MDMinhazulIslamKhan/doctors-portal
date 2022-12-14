import banner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row-reverse justify-evenly w-full">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;