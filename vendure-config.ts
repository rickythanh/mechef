import {
    examplePaymentHandler,
    DefaultSearchPlugin,
    VendureConfig,
} from '@vendure/core'; 
import { EmailPlugin } from '@vendure/email-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import path from 'path';

const PORT = Number(process.env.PORT) || 3000;
console.log('PORT', PORT);
console.log('process', process);

export const config: VendureConfig = {
    authOptions: {
        sessionSecret: 'r14h62m9zr',
    },
    port: PORT,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    dbConnectionOptions: {
        type: 'postgres',
        synchronize: true, // turn this off for production
        logging: false,
        database: 'vendure',
        host: 'postgresql',
        port: 5432,
        username: 'user7C6',
        password: 'RSPstpL3jxJuPf0u',
    },
    paymentOptions: {
        paymentMethodHandlers: [examplePaymentHandler],
    },
    customFields: {},
    plugins: [
        new AssetServerPlugin({
            route: 'assets',
            assetUploadDir: path.join(__dirname, 'vendure/assets'),
            port: PORT + 1,
        }),
        // new EmailPlugin({
        //     devMode: true,
        //     templatePath: path.join(__dirname, 'vendure/email/templates'),
        //     outputPath: path.join(__dirname, 'vendure/email/test-emails'),
        //     templateVars: {
        //         shopUrl: 'http://www.example.com',
        //     }
        // }),
        new DefaultSearchPlugin(),
        new AdminUiPlugin({ port: PORT+2 }),
    ],
};
