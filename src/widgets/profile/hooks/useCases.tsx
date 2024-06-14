import { useMemo } from "react";

import { useGetCasesQuery } from "@/app/api/cases/api";

import { CONDITIONS, PRIVILEGES, PAID_AMOUNT, DATE_IMMUNITY, NEXT_CASE } from "../consts";
import { ConditionsWrapper, CaseItemTitle, PrivilegesWrapper } from "../ui/Cases/ProfileCases.styled";

export const useCases = () => {
  const { data, isFetching } = useGetCasesQuery();
  const prepareDate = (date: string) => date.split("-").reverse().join(".");

  const getPrivileges = (privileges: Record<number, string> | null) => {
    if (!privileges || (Array.isArray(privileges) && privileges.length === 0)) {
      return null;
    } else {
      return (
        <PrivilegesWrapper>
          <CaseItemTitle>{PRIVILEGES}</CaseItemTitle>
          <ul>
            {Object.values(privileges).map((privilege, index) => (
              <li key={index}>{privilege}</li>
            ))}
          </ul>
        </PrivilegesWrapper>
      );
    }
  };

  const getConditions = (dates: [string, string], price: number[] | null) => {
    return (
      <ConditionsWrapper>
        <CaseItemTitle>{CONDITIONS}</CaseItemTitle>
        <ul>
          <li>Период: {`${prepareDate(dates[0])} - ${prepareDate(dates[1])}`}</li>
          <li>Сумма: {price ? `от ${price[0]} до ${price[1]}` : "-"}</li>
        </ul>
      </ConditionsWrapper>
    );
  };

  const conditions = useMemo(() => {
    if (data) {
      const {
        caseSegment: { analyzedPeriodStart, analyzedPeriodEnd, amountGt, amountLt },
      } = data;
      return getConditions([analyzedPeriodStart, analyzedPeriodEnd], amountGt && amountLt ? [amountGt, amountLt] : null);
    } else {
      return null;
    }
  }, [data]);

  const privileges = useMemo(() => {
    if (data) {
      return getPrivileges(data.caseSegment.privileges);
    }
  }, [data]);

  const currentCaseInfoList = data
    ? [
        [PAID_AMOUNT, `${data.paidAmount}₽`],
        [DATE_IMMUNITY, data.dateImmunity || "-"],
        [NEXT_CASE, "-"],
      ]
    : [];

  return { data, isFetching, conditions, privileges, currentCaseInfoList };
};
