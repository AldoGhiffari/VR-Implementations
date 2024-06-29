import {Component, Property} from '@wonderlandengine/api';

export class SafetyIndicator extends Component {
    static Properties = {
        warningMessage: Property.string('Caution!'),
        position: Property.vector([0, 2, -2])
    };

    start() {
        this.createWarningIndicator();
    }

    createWarningIndicator() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(this.warningMessage, 20, 50);

        const texture = new WL.Texture();
        texture.fromCanvas(canvas);
        const material = this.object.addComponent('material');
        material.texture = texture;

        const warningPlane = this.object.addComponent('mesh');
        warningPlane.material = material;
        warningPlane.translate(this.position);
    }
}

// Register the component
WL.registerComponent('safety-indicator', SafetyIndicator);
