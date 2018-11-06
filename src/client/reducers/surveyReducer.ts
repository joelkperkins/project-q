/**
 * @module surveyReducer
 * @description Reducer for Survey Object
 */

import actions from '../actions/actionTypes';

// Define initial state
const initialSurveyState: any = {
  issueOne: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueTwo: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueThree: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueFour: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueFive: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueSix: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueSeven: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueEight: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueNine: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueTen: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueEleven: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
  issueTwelve: {
    q1: {
      qid: 'q1',
      question: 'How would you answer this first survey question?',
      agree: null,
    },
    q2: {
      qid: 'q2',
      question: 'How would you answer this second survey question?',
      agree: null,
    },
    q3: {
      qid: 'q3',
      question: 'How would you answer this third survey question?',
      agree: null,
    },
  },
};

// Reducer for single question
const questionReducer = (state: any, action: any) => {
  switch(action.type) {
    case actions.ANSWER_QUESTION:
      if (state.qid === action.payload.qid) {
        return {
          ...state,
          agree: action.payload.agree,
        }
      }

    default: 
    return state
  }
}

// Reducer for all questions
const questionsReducer = (state: any, action: any) => {
  switch(action.type) {
    case actions.ANSWER_QUESTION:
      const question: string = action.payload.qid;
      const nextState: any = {};
      nextState[question] = questionReducer(state[question], action);
      return {
        ...state,
        nextState,
      }

    default: 
    return state
  }
}

// Reducer for whole survey
const surveyReducer = (state: any = initialSurveyState, action: any) => {
  switch(action.type) {
    case actions.ANSWER_QUESTION:
      const issue: string = action.payload.issue;
      const nextState: any = {};
      nextState[issue] = questionsReducer(state[issue], action)
      return {
        ...state,
        nextState
      }

    default: 
    return state
  }
}

export default surveyReducer;

// -- SELECTOR FUNCTIONS -- //
// Returns survey questions
export const getQuestionsList = (state: any, issue: string): any => Object.keys(state[issue]);
export const getQuestionsObject = (state: any, issue: string): any => state[issue];