import NodeOptions from './NodeOptions';
const InitialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        type: 'navigation',
        data: {
            fields: [
                { name: 'name', type: 'string', default: '', value: 'App' }
            ]
        }
    },
    {
        id: '2',
        position: { x: 0, y: 100 },
        type: 'navigation',
        data: {
            fields: [
                { name: 'name', type: 'string', default: '', value: 'Auth' }
            ]
        }
    },
    {
        id: '3',
        position: { x: 0, y: 200 },
        type: 'screen',
        data: {
            fields: [
                { name: 'name', type: 'string', default: '', value: 'Login' },
            ]
        }
    },
    {
        id: '4',
        position: { x: 0, y: 300 },
        type: 'safeAreaView',
        data: {
            fields: [
                { name: 'name', type: 'string', default: '', value: 'SafeAreaView' },
                {
                    name: 'style', type: 'object',
                    fields: NodeOptions.filter(option => option.type === 'safeAreaView')[0].fields.filter(field => field.name === 'style')[0].fields
                }
            ]
        }
    },
    {
        id: '5',
        position: { x: 0, y: 400 },
        type: 'text',
        data: {
            fields: [
                { name: 'text', type: 'string', default: '', value: 'Welcome' },
                {
                    name: 'style', type: 'object',
                    fields: NodeOptions.filter(option => option.type === 'text')[0].fields.filter(field => field.name === 'style')[0].fields
                }
            ]
        }
    },
    // {
    //     id: '6',
    //     position: { x: 100, y: 400 },
    //     type: 'input',
    //     data: {
    //         fields: [
    //             { name: 'name', type: 'string', default: '', value: 'Username' },
    //             { name: 'placeholder', type: 'string', default: '', value: 'Enter your username'},
    //             { name: 'placeholderTextColor', type: 'string', default: '', value: 'gray'},
    //             {
    //                 name: 'style', type: 'object',
    //                 fields: NodeOptions.filter(option => option.type === 'input')[0].fields.filter(field => field.name === 'style')[0].fields
    //             }
    //         ]
    //     }
    // },        
    // {
    //     id: '7',
    //     position: { x: 200, y: 400 },
    //     type: 'input',
    //     data: {
    //         fields: [
    //             { name: 'name', type: 'string', default: '', value: 'Password' },
    //             { name: 'placeholder', type: 'string', default: '', value: 'Enter your password'},
    //             { name: 'placeholderTextColor', type: 'string', default: '', value: 'gray'},
    //             {
    //                 name: 'style', type: 'object',
    //                 fields: NodeOptions.filter(option => option.type === 'input')[0].fields.filter(field => field.name === 'style')[0].fields
    //             }
    //         ]
    //     }
    // },
    // {
    //     id: '8',
    //     position: { x: 0, y: 500 },
    //     type: 'button',
    //     data: {
    //         fields: [
    //             { name: 'name', type: 'string', default: '', value: 'Login' },
    //             {
    //                 name: 'style', type: 'object',
    //                 fields: NodeOptions.filter(option => option.type === 'button')[0].fields.filter(field => field.name === 'style')[0].fields
    //             }
    //         ]
    //     }
    // },
    // {
    //     id: '9',
    //     position: { x: 100, y: 500 },
    //     type: 'button',
    //     data: {
    //         fields: [
    //             { name: 'name', type: 'string', default: '', value: 'Register' },
    //             {
    //                 name: 'style', type: 'object',
    //                 fields: NodeOptions.filter(option => option.type === 'button')[0].fields.filter(field => field.name === 'style')[0].fields
    //             }
    //         ]
    //     }
    // }
];

export default InitialNodes;