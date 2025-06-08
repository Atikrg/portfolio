import styled from 'styled-components';

export const SkillsSection = styled.section`
  background-color: #121212;
  color: #fff;
  padding: 60px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff8a00;
  margin-bottom: 40px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 40px;
  max-width: 1100px;
  width: 100%;
`;

export const SkillsCard = styled.div`
  background-color: #1e1e1e;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const IconWrapper = styled.div`
  background-color: #2c2c2c;
  padding: 10px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 24px;
    height: 24px;
  }

  .blue {
    color: #3b82f6;
  }

  .green {
    color: #22c55e;
  }

  .purple {
    color: #a855f7;
  }
`;

export const Category = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f3f4f6;
`;

export const SkillsList = styled.ul`
  list-style: disc;
  padding-left: 1.25rem;
`;

export const SkillItem = styled.li`
  font-size: 1rem;
  color: #d1d5db;
  margin-bottom: 0.5rem;

  &:hover {
    color: #ff8a00;
  }
`;
