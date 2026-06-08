import { useNavigate } from 'react-router-dom';
import { getQuestionnaireById } from '../data/questionnaires';
import { useLanguage } from '../context/LanguageContext';
import './QuestionnaireCard.css';

const icons: Record<string, JSX.Element> = {
  babies: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M8 14c-2.5 1-4 3-4 5h16c0-2-1.5-4-4-5"/>
      <path d="M9 8c0 0-1-2 0-3s3 0 3 0"/>
    </svg>
  ),
  children: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3.5"/>
      <path d="M6 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/>
      <path d="M9 11l1 3 2-2 2 2 1-3"/>
    </svg>
  ),
  female: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M12 12v9"/>
      <path d="M9 18h6"/>
      <path d="M10 6.5c.5-1 3-1.5 3.5.5"/>
    </svg>
  ),
  male: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="14" r="4"/>
      <path d="M15 9l5-5"/>
      <path d="M16 4h4v4"/>
    </svg>
  ),
};

const arrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

interface QuestionnaireCardProps {
  questionnaireId: string;
}

export const QuestionnaireCard = ({ questionnaireId }: QuestionnaireCardProps) => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const questionnaire = getQuestionnaireById(questionnaireId);

  if (!questionnaire) return null;

  return (
    <div className="questionnaire-card" onClick={() => navigate(`/questionnaire/${questionnaireId}`)}>
      <div className="card-icon">
        {icons[questionnaireId]}
      </div>
      <h3>{questionnaire.name[lang]}</h3>
      <div className="card-arrow">{arrowIcon}</div>
    </div>
  );
};
