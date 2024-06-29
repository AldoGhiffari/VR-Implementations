import {Component, Property} from '@wonderlandengine/api';

export class UIComponent extends Component {
    static Properties = {
        message: Property.string('Safety First!'),
        showHelp: Property.bool(true)
    };

    start() {
        this.createUI();
    }

    createUI() {
        // Create a UI canvas
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Draw the UI elements
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.fillText(this.message, 20, 50);

        if (this.showHelp) {
            ctx.fillText('Help: Press H', 20, 100);
            ctx.fillText('Tools: Press T', 20, 150);
        }

        // Convert canvas to texture and apply it
        const texture = new WL.Texture();
        texture.fromCanvas(canvas);
        const material = this.object.addComponent('material');
        material.texture = texture;

        // Add the UI as a plane in front of the user
        const uiPlane = this.object.addComponent('mesh');
        uiPlane.material = material;
        uiPlane.translate([0, 1.5, -2]); // Adjust the position as needed
    }
}

// Register the component
WL.registerComponent('ui-component', UIComponent);
