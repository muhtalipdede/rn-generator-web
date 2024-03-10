const NodeOptions = [
    {
        type: 'navigation',
        name: 'Navigation',
        fields: [
            { name: 'name', type: 'string' },
        ]
    },
    {
        type: 'tab',
        name: 'Tab',
        fields: [
            { name: 'name', type: 'string' },
        ]
    },
    {
        type: 'screen',
        name: 'Screen',
        fields: [
            { name: 'name', type: 'string' },
        ]
    },
    {
        type: 'safeAreaView',
        name: 'SafeAreaView',
        fields: [
            {
                name: 'style', type: 'object', fields: [
                    { name: 'backgroundColor', type: 'string' },
                ]
            },
        ]
    },
    {
        type: 'view',
        name: 'View',
        fields: [
            {
                name: 'style', type: 'object', fields: [
                    { name: 'backgroundColor', type: 'string' },
                ]
            },
        ]
    },
    {
        type: 'scrollView',
        name: 'ScrollView',
        fields: [
            {
                name: 'style', type: 'object', fields: [
                    { name: 'backgroundColor', type: 'string' },
                ]
            },
        ]
    },
    {
        type: 'text',
        name: 'Text',
        fields: [
            { name: 'text', type: 'string' },
            {
                name: 'style', type: 'object', fields: [
                    { name: 'color', type: 'string' },
                    { name: 'backgroundColor', type: 'string' },
                ]
            },
        ]
    },
    {
        type: 'input',
        name: 'Input',
        fields: [
            { name: 'placeholder', type: 'string' },
            { name: 'placeholderTextColor', type: 'string' },
            { name: 'value', type: 'string' },
            {
                name: 'style', type: 'object', fields: [
                    { name: 'color', type: 'string' },
                    { name: 'backgroundColor', type: 'string' },
                ]
            },
        ]
    },
    {
        type: 'touchableOpacity',
        name: 'TouchableOpacity',
        fields: [
            {
                name: 'style', type: 'object', fields: [
                    { name: 'color', type: 'string' },
                    { name: 'backgroundColor', type: 'string' },
                ]
            },
        ]
    },
    {
        type: 'button',
        name: 'Button',
        fields: [
            { name: 'text', type: 'string' },
            {
                name: 'onPress', type: 'object', fields: [
                    { name: 'type', type: 'string' },
                    { name: 'name', type: 'string' },
                ]
            },
            {
                name: 'style', type: 'object', fields: [
                    { name: 'color', type: 'string' },
                    { name: 'backgroundColor', type: 'string' },
                ]
            },
        ]
    },
    {
        type: 'image',
        name: 'Image',
        fields: [
            { name: 'source', type: 'string' },
            {
                name: 'style', type: 'object', fields: [
                    { name: 'width', type: 'number' },
                    { name: 'height', type: 'number' },
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