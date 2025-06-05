
import foodPlate from '../../assets/images/food-plate.webp';

const Spinner = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center bg-base-100'>
            <img
                src={foodPlate}
                alt="Foodio Food Plate"
                className="w-24 h-24 mb-4 rounded-full shadow-lg animate-spin border-4 border-secondary border-dashed"
                style={{ animationDuration: '1.2s' }}
            />
        </div>
    );
};

export default Spinner;