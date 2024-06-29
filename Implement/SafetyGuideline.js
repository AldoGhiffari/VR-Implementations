import {Component, Property} from '@wonderlandengine/api';

export class SafetyGuideline extends Component {
    static Properties = {
        message: Property.string('Follow safety protocols!')
    };

    start() {
        // Show a safety message to the user
        this.showSafetyMessage();
    }

    showSafetyMessage() {
        const safetyMessage = this.object.addComponent('text');
        safetyMessage.text = this.message;
        safetyMessage.alignment = 'center';
        safetyMessage.position = [0, 2, -2]; // Position the message in front of the user
    }
}

// Register the component
WL.registerComponent('safety-guideline', SafetyGuideline);
