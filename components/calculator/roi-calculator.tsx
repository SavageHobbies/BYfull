'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface EmployeeInfo {
  numberOfEmployees: number;
  hourlyRate: number;
  hoursPerDay: number;
  daysPerWeek: number;
  includeOvertime: boolean;
  healthInsurance: number;
  retirementBenefits: number;
}

export default function ROICalculator() {
  const [employeeInfo, setEmployeeInfo] = useState<EmployeeInfo>({
    numberOfEmployees: 1,
    hourlyRate: 20,
    hoursPerDay: 8,
    daysPerWeek: 5,
    includeOvertime: false,
    healthInsurance: 500,
    retirementBenefits: 150,
  });

  const [annualCosts, setAnnualCosts] = useState({
    traditional: 0,
    ai: 0,
    savings: 0,
    savingsPercentage: 0,
    additionalCoverage: 0,
    additionalCoverageCost: 0,
    total247Cost: 0,
  });

  const calculateCosts = () => {
    const {
      numberOfEmployees,
      hourlyRate,
      hoursPerDay,
      daysPerWeek,
      includeOvertime,
      healthInsurance,
      retirementBenefits,
    } = employeeInfo;

    // Calculate base annual salary
    const weeklyHours = hoursPerDay * daysPerWeek;
    const annualHours = weeklyHours * 52;
    const baseSalary = hourlyRate * annualHours * numberOfEmployees;

    // Calculate overtime if included
    const overtimePay = includeOvertime
      ? (hourlyRate * 1.5 * 10 * 52 * numberOfEmployees) // Assuming 10 hours overtime per week
      : 0;

    // Calculate benefits
    const annualBenefits = (healthInsurance + retirementBenefits) * 12 * numberOfEmployees;

    // Calculate traditional cost
    const traditionalCost = baseSalary + overtimePay + annualBenefits;

    // Calculate AI service cost
    const setupFee = 999; // Limited time offer
    const monthlyFee = 800;
    const annualAICost = setupFee + (monthlyFee * 12);

    // Calculate savings
    const annualSavings = traditionalCost - annualAICost;
    const savingsPercentage = (annualSavings / traditionalCost) * 100;

    // Calculate additional coverage hours (24/7 minus current coverage)
    const currentCoverageHours = hoursPerDay * daysPerWeek * 52;
    const totalYearlyHours = 24 * 365;
    const additionalCoverage = totalYearlyHours - currentCoverageHours;
    const additionalCoverageCost = additionalCoverage * hourlyRate; // Cost if covered by employees

    // Calculate total 24/7 cost with employees
    const total247Cost = (totalYearlyHours * hourlyRate) + (annualBenefits * (totalYearlyHours / currentCoverageHours));

    setAnnualCosts({
      traditional: Math.round(traditionalCost),
      ai: Math.round(annualAICost),
      savings: Math.round(annualSavings),
      savingsPercentage: Math.round(savingsPercentage * 10) / 10,
      additionalCoverage,
      additionalCoverageCost: Math.round(additionalCoverageCost),
      total247Cost: Math.round(total247Cost),
    });
  };

  useEffect(() => {
    calculateCosts();
  }, [employeeInfo]);

  const handleInputChange = (field: keyof EmployeeInfo, value: string | boolean) => {
    setEmployeeInfo(prev => ({
      ...prev,
      [field]: typeof value === 'boolean' ? value : Number(value),
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-white">Transform Your Customer Service ROI</h2>
        <p className="text-xl text-white mb-6">
          Experience enterprise-grade AI customer service at a fraction of the cost.
          Our solution handles unlimited conversations 24/7, delivering consistent,
          high-quality support while dramatically reducing operational costs.
        </p>
        <div className="inline-block bg-yellow-500 rounded-full px-8 py-3 mt-4">
          <span className="font-bold text-lg text-slate-900">Limited Time Launch Offer: </span>
          <span className="line-through text-red-700 font-bold text-lg">$2,000</span>
          <span className="text-green-800 font-bold text-lg ml-2">$999 Setup Fee</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 bg-slate-800/50">
          <h3 className="text-2xl font-semibold mb-6 text-white">Employee Cost Calculator</h3>
          <div className="space-y-5">
            <div>
              <Label htmlFor="numberOfEmployees" className="text-white text-lg mb-2 block">Number of Employees</Label>
              <Input
                id="numberOfEmployees"
                type="number"
                value={employeeInfo.numberOfEmployees}
                onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                className="bg-slate-700 text-white text-lg h-12"
              />
            </div>
            <div>
              <Label htmlFor="hourlyRate" className="text-white text-lg mb-2 block">Hourly Rate ($)</Label>
              <Input
                id="hourlyRate"
                type="number"
                value={employeeInfo.hourlyRate}
                onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                className="bg-slate-700 text-white text-lg h-12"
              />
            </div>
            <div>
              <Label htmlFor="hoursPerDay" className="text-white text-lg mb-2 block">Hours Per Day</Label>
              <Input
                id="hoursPerDay"
                type="number"
                value={employeeInfo.hoursPerDay}
                onChange={(e) => handleInputChange('hoursPerDay', e.target.value)}
                className="bg-slate-700 text-white text-lg h-12"
              />
            </div>
            <div>
              <Label htmlFor="daysPerWeek" className="text-white text-lg mb-2 block">Days Per Week</Label>
              <Input
                id="daysPerWeek"
                type="number"
                value={employeeInfo.daysPerWeek}
                onChange={(e) => handleInputChange('daysPerWeek', e.target.value)}
                className="bg-slate-700 text-white text-lg h-12"
              />
            </div>
            <div className="flex items-center space-x-3 py-2">
              <Switch
                id="overtime"
                checked={employeeInfo.includeOvertime}
                onCheckedChange={(checked) => handleInputChange('includeOvertime', checked)}
                className="scale-125"
              />
              <Label htmlFor="overtime" className="text-white text-lg">Include Overtime</Label>
            </div>
            <div>
              <Label htmlFor="healthInsurance" className="text-white text-lg mb-2 block">Monthly Health Insurance ($)</Label>
              <Input
                id="healthInsurance"
                type="number"
                value={employeeInfo.healthInsurance}
                onChange={(e) => handleInputChange('healthInsurance', e.target.value)}
                className="bg-slate-700 text-white text-lg h-12"
              />
            </div>
            <div>
              <Label htmlFor="retirementBenefits" className="text-white text-lg mb-2 block">Monthly Retirement Benefits ($)</Label>
              <Input
                id="retirementBenefits"
                type="number"
                value={employeeInfo.retirementBenefits}
                onChange={(e) => handleInputChange('retirementBenefits', e.target.value)}
                className="bg-slate-700 text-white text-lg h-12"
              />
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-8 bg-slate-800/50">
            <h3 className="text-2xl font-semibold mb-6 text-white">Annual Cost Comparison</h3>
            <div className="space-y-6">
              <div>
                <Label className="text-white text-lg">Current Support Costs</Label>
                <div className="text-3xl font-bold text-white">${annualCosts.traditional.toLocaleString()}</div>
                <p className="text-base text-slate-300">Includes salary, overtime, and benefits</p>
              </div>
              <div>
                <Label className="text-white text-lg">AI-Powered Solution</Label>
                <div className="text-3xl font-bold text-white">${annualCosts.ai.toLocaleString()}</div>
                <p className="text-base text-slate-300">One-time setup fee + $800/month</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-emerald-900/30 border-emerald-500/30">
            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Projected Annual Savings</h3>
            <div className="text-4xl font-bold text-emerald-400">
              ${annualCosts.savings.toLocaleString()}
            </div>
            <p className="text-lg text-emerald-300">
              {annualCosts.savingsPercentage}% reduction in support costs
            </p>
          </Card>

          <Card className="p-8 bg-blue-900/30 border-blue-500/30">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">24/7 Coverage Analysis</h3>
            <div className="text-3xl font-bold text-blue-400">
              {annualCosts.additionalCoverage.toLocaleString()} additional hours/year
            </div>
            <p className="text-lg text-blue-300 mb-6">Unlimited conversations, always available</p>
            
            <div className="space-y-6">
              <div className="p-4 bg-blue-950/30 rounded-lg">
                <p className="text-lg text-blue-300 mb-2">Cost for Additional Coverage Hours:</p>
                <div className="text-3xl font-bold text-blue-400">
                  ${annualCosts.additionalCoverageCost.toLocaleString()}
                </div>
                <p className="text-base text-blue-300 mt-1">If staffed with employees at current rates</p>
              </div>
              
              <div className="p-4 bg-blue-950/30 rounded-lg">
                <p className="text-lg text-blue-300 mb-2">Total Annual Cost for 24/7 Staffing:</p>
                <div className="text-3xl font-bold text-blue-400">
                  ${annualCosts.total247Cost.toLocaleString()}
                </div>
                <p className="text-base text-blue-300 mt-1">Full employee coverage with benefits</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
