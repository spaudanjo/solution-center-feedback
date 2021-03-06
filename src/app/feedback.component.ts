import ScFeedbackController from './feedback.controller';

class ScFeedbackComponent implements ng.IComponentOptions {
  bindings: any = {
    'moduleId': '<',
    'moduleName': '<',
    'debugConfig': '<?'
  };
  template: string = require('../views/feedback.html');
  controller: Function = ScFeedbackController;
}

export default ScFeedbackComponent;
