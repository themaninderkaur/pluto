import { PlutoModel } from './PlutoModel';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('3d-model');
    if (container) {
        const plutoModel = new PlutoModel(container);
        plutoModel.init();
    }
});
