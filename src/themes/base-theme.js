import color from 'color';
import { Platform } from 'react-native';

export default {
    // Buttons
    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },

    // Text
    textColor: '#000',
    inverseTextColor: '#fff',

    // Color
    brandPrimary: '#5067FF',
    brandInfo: '#5bc0de',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandSidebar: '#252932',
}