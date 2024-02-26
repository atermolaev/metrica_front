import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/react';

import { moneyCourceRequest } from '../../ducks/page1/actions';

const Page1: React.FC = () => {
    return (
        <div>
            <div>Page1</div>
            <div><Button>Запрос</Button></div>
        </div>
    )
}

export default Page1