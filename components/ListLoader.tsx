import React from 'react';
import FightLoader from './FightLoader';

const ListLoader = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-10">
            <div className="rounded-md text-gray-400 font-medium flex items-center justify-center">
                <FightLoader/>
            </div>
        </div>
    );
}

export { ListLoader };