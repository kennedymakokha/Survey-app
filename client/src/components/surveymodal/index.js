import React from 'react';
import SurveyElement from './surveyelement';
import './surveymodal.css'
const data = [{
    id: 1,
    question: "Lorem 1",
    ans1: 'ans1',
    ans2: 'ans2'
},
{
    id: 1,
    question: "Lorem 1",
    ans1: 'ans1',
    ans2: 'ans2'
}]
const SurveyModal = ({ show }) => {
    if (!show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                {/* <div className="modal-header">
                <h4 className="modal-title">modaltiltle</h4>
            </div> */}
                <div className="modal-body">
                    <div>
                        <div className="form " >
                            <SurveyElement data={data} />
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <button className="button">close</button>
                    <button className="button">{data.length === 0 ? "Complete" : "Save and Continue"}</button>
                </div>
            </div>

        </div>

    );

}

export default SurveyModal;