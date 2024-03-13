const NodeOptions = [
    {
        type: 'navigation',
        name: 'Navigation',
        fields: [
            { name: 'name', type: 'string', default: '', value: '' },
        ]
    },
    {
        type: 'tab',
        name: 'Tab',
        fields: [
            { name: 'name', type: 'string', default: '', value: '' },
        ]
    },
    {
        type: 'screen',
        name: 'Screen',
        fields: [
            { name: 'name', type: 'string', default: '', value: '' },
        ]
    },
    {
        type: 'safeAreaView',
        name: 'SafeAreaView',
        fields: [
            {
                name: 'style', type: 'object',
                fields: [
                    { name: 'backgroundColor', type: 'string', default: 'black', value: 'black' },
                    { name: 'flex', type: 'number', default: 1, value: 1 },
                    { name: 'flexDirection', type: 'string', default: 'column', value: 'column' },
                    { name: 'justifyContent', type: 'string', default: 'center', value: 'center' },
                    { name: 'alignItems', type: 'string', default: 'center', value: 'center' },
                    { name: 'padding', type: 'number', default: 20, value: 20 },
                ]
            },
        ]
    },
    {
        type: 'view',
        name: 'View',
        fields: [
            {
                name: 'style', type: 'object',
                fields: [
                    { name: 'backgroundColor', type: 'string', default: 'black', value: 'black' },
                    { name: 'flex', type: 'number', default: 1, value: 1 },
                    { name: 'flexDirection', type: 'string', default: 'column', value: 'column' },
                    { name: 'justifyContent', type: 'string', default: 'center', value: 'center' },
                    { name: 'alignItems', type: 'string', default: 'center', value: 'center' },
                    { name: 'gap', type: 'number', default: 20, value: 20 },
                    { name: 'padding', type: 'number', default: 20, value: 20 },
                    { name: 'borderColor', type: 'string', default: 'black', value: 'black' },
                    { name: 'borderWidth', type: 'number', default: 1, value: 1 },
                    { name: 'borderRadius', type: 'number', default: 10, value: 10 },
                    { name: 'width', type: 'number', default: 200, value: 200 },
                    { name: 'height', type: 'number', default: 200, value: 200 },
                ]
            },
        ]
    },
    {
        type: 'scrollView',
        name: 'ScrollView',
        fields: [
            {
                name: 'style', type: 'object',
                fields: [
                    { name: 'backgroundColor', type: 'string', default: 'black', value: 'black' },
                    { name: 'flex', type: 'number', default: 1, value: 1 },
                    { name: 'flexDirection', type: 'string', default: 'column', value: 'column' },
                    { name: 'justifyContent', type: 'string', default: 'center', value: 'center' },
                    { name: 'alignItems', type: 'string', default: 'center', value: 'center' },
                    { name: 'padding', type: 'number', default: 20, value: 20 },
                ]
            },
        ]
    },
    {
        type: 'text',
        name: 'Text',
        fields: [
            { name: 'text', type: 'string', default: 'Text', value: 'Text' },
            {
                name: 'style', type: 'object',
                fields: [
                    { name: 'color', type: 'string', default: 'white', value: 'white' },
                    { name: 'backgroundColor', type: 'string', default: '', value: '' },
                    { name: 'fontSize', type: 'number', default: 16, value: 16 },
                    { name: 'fontWeight', type: 'string', default: 'normal', value: 'normal' },
                    { name: 'textAlign', type: 'string', default: 'center', value: 'center' },
                ]
            },
        ]
    },
    {
        type: 'input',
        name: 'Input',
        fields: [
            { name: 'placeholder', type: 'string', default: 'Enter text', value: 'Enter text' },
            { name: 'placeholderTextColor', type: 'string', default: 'gray', value: 'gray' },
            { name: 'value', type: 'string', default: '', value: '' },
            {
                name: 'style', type: 'object',
                fields: [
                    { name: 'color', type: 'string', default: 'black', value: 'black' },
                    { name: 'backgroundColor', type: 'string', default: 'white', value: 'white' },
                    { name: 'fontSize', type: 'number', default: 16, value: 16 },
                    { name: 'fontWeight', type: 'string', default: 'normal', value: 'normal' },
                    { name: 'textAlign', type: 'string', default: 'center', value: 'center' },
                    { name: 'borderColor', type: 'string', default: 'black', value: 'black' },
                    { name: 'borderWidth', type: 'number', default: 1, value: 1 },
                    { name: 'borderRadius', type: 'number', default: 10, value: 10 },
                    { name: 'width', type: 'number', default: 200, value: 200 },
                    { name: 'height', type: 'number', default: 40, value: 40 },
                ]
            },
        ]
    },
    {
        type: 'touchableOpacity',
        name: 'TouchableOpacity',
        fields: [
            {
                name: 'style', type: 'object', 
                fields: [
                    { name: 'color', type: 'string', default: 'black', value: 'black' },
                    { name: 'backgroundColor', type: 'string', default: 'white', value: 'white' },
                    { name: 'fontSize', type: 'number', default: 16, value: 16 },
                    { name: 'fontWeight', type: 'string', default: 'normal', value: 'normal' },
                    { name: 'textAlign', type: 'string', default: 'center', value: 'center' },
                    { name: 'padding', type: 'number', default: 20, value: 20 },
                ]
            },
        ]
    },
    {
        type: 'button',
        name: 'Button',
        fields: [
            { name: 'text', type: 'string', default: 'Button', value: 'Button' },
            {
                name: 'onPress', type: 'object', 
                fields: [
                    { name: 'type', type: 'string', default: 'function', value: 'function' },
                    { name: 'value', type: 'string', default: '', value: '' },
                ]
            },
            {
                name: 'style', type: 'object', 
                fields: [
                    { name: 'flex', type: 'number', default: 1, value: 1 },
                    { name: 'flexDirection', type: 'string', default: 'column', value: 'column' },
                    { name: 'justifyContent', type: 'string', default: 'center', value: 'center' },
                    { name: 'alignItems', type: 'string', default: 'center', value: 'center' },
                    { name: 'backgroundColor', type: 'string', default: 'white', value: 'white' },
                    { name: 'color', type: 'string', default: 'black', value: 'black' },
                    { name: 'fontSize', type: 'number', default: 16, value: 16 },
                    { name: 'fontWeight', type: 'string', default: 'normal', value: 'normal' },
                    { name: 'textAlign', type: 'string', default: 'center', value: 'center' },
                    { name: 'borderColor', type: 'string', default: 'black', value: 'black' },
                    { name: 'borderWidth', type: 'number', default: 1, value: 1 },
                    { name: 'borderRadius', type: 'number', default: 10, value: 10 },
                    { name: 'width', type: 'number', default: 200, value: 200 },
                ]
            },
        ]
    },
    {
        type: 'image',
        name: 'Image',
        fields: [
            { name: 'source', type: 'string', default: 'https://reactnative.dev/img/tiny_logo.png', value: 'https://reactnative.dev/img/tiny_logo.png' },
            {
                name: 'style', type: 'object', 
                fields: [
                    { name: 'width', type: 'number', default: 100, value: 100 },
                    { name: 'height', type: 'number', default: 100, value: 100 },
                    { name: 'padding', type: 'number', default: 20, value: 20 },
                ]
            },
        ]
    },
    // {
    //     type: 'flat-list',
    //     name: 'FlatList',
    //     fields: [
    //         { name: 'data', type: 'array' },
    //         { name: 'renderItem', type: 'string' },
    //         { name: 'keyExtractor', type: 'string' },
    //     ]
    // },
    // {
    //     type: 'section-list',
    //     name: 'SectionList',
    //     fields: [
    //         { name: 'sections', type: 'array' },
    //         { name: 'renderItem', type: 'string' },
    //         { name: 'keyExtractor', type: 'string' },
    //     ]
    // }
]

export default NodeOptions;