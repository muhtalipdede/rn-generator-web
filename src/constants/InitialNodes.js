import NodeOptions from './NodeOptions';
const InitialNodes = [
    {
        id: '1', 
        position: { x: 0, y: 0 }, 
        type: 'navigation',
        data: { fields: NodeOptions.filter(option => option.type === 'navigation')[0].fields },
    },
    {
        id: '2',
        position: { x: -200, y: 100 }, 
        type: 'navigation',
        data: { fields: NodeOptions.filter(option => option.type === 'navigation')[0].fields },
    },
    {
        id: '3', 
        position: { x: 200, y: 100 }, 
        type: 'navigation',
        data: { fields: NodeOptions.filter(option => option.type === 'navigation')[0].fields },
    },
    {
        id: '4', 
        position: { x: 200, y: 200 }, type: 'tab',
        data: { fields: NodeOptions.filter(option => option.type === 'tab')[0].fields },
    },
    {
        id: '5', 
        position: { x: 100, y: 300 }, 
        type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '6', position: { x: 300, y: 300 }, type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '7', position: { x: 500, y: 300 }, type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '8', position: { x: 700, y: 300 }, type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '9', position: { x: 900, y: 300 }, type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '10', position: { x: -100, y: 300 }, type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '11', position: { x: -300, y: 300 }, type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '12', position: { x: -500, y: 300 }, type: 'screen',
        data: { fields: NodeOptions.filter(option => option.type === 'screen')[0].fields },
    },
    {
        id: '13', position: { x: 0, y: 400 }, type: 'safeAreaView',
        data: { fields: NodeOptions.filter(option => option.type === 'safeAreaView')[0].fields },
    },
    {
        id: '14', position: { x: 300, y: 500 }, type: 'view',
        data: { fields: NodeOptions.filter(option => option.type === 'view')[0].fields },
    },
    {
        id: '15', position: { x: 500, y: 600 }, type: 'scrollView',
        data: { fields: NodeOptions.filter(option => option.type === 'scrollView')[0].fields },
    },
    {
        id: '16', position: { x: 0, y: 600 }, type: 'text',
        data: { fields: NodeOptions.filter(option => option.type === 'text')[0].fields },
    }
];

export default InitialNodes;