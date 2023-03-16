import { DefaultConfig } from './config.default';

export default () => {
    const config: DefaultConfig = {};
    config.env = 'prod';
    config.news = {
        pageSize: 30,
    };
    return config;
};
