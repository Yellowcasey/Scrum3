import { TestBed, inject } from '@angular/core/testing';
import { AuthguardGuard } from './authguard.guard';
describe('AuthguardGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AuthguardGuard]
        });
    });
    it('should ...', inject([AuthguardGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=authguard.guard.spec.js.map